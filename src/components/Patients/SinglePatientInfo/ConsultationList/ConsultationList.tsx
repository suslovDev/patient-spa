import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { CONSULTATION } from '../../../../mock/consultation.mock';
import { ConsultationItem } from '../../../Consultations/ConsultationList/ConsultationItem';
import { IConsultation } from '../../../Consultations/ConsultationList/ConsultationItem/ConsultationItem';

import classes from './ConsultationList.module.scss';

const ConsultationList = (): JSX.Element => {
    const [consultations, setConsultations] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const userConsultations = CONSULTATION.filter(item => item.userId === id);
        setConsultations(userConsultations);
    }, [id])

    return (
        <div className={classes.list}>
            {consultations.map((consultation: IConsultation) => (
                <ConsultationItem consultation={consultation} key={consultation.uid} />
            ))}
        </div>
    )
}

export default ConsultationList;