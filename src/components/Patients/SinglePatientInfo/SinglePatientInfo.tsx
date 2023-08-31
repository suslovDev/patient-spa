import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';

import { USERS } from '../../../mock/users.mock';
import { IUserData } from '../../../types/IUserData';
import Card from '../../Layout/Card/Card';
import Patient from '../../Patient/Patient';
import { PatientNavigation } from '../PatientNavigation';

import classes from './SinglePatientInfo.module.scss';

const SinglePatientInfo = (): JSX.Element => {
    const [patientData, setPatientData] = useState<IUserData | undefined>();

    const { id } = useParams();


    useEffect(() => {
        const curentUser = USERS.find(user => user.id === id);
        setPatientData(curentUser);
    }, [id])


    return (
        <div className={classes.patientInfo}>
            <Patient userData={patientData} />
            <PatientNavigation />
            <Card>
                <div className={classes.listContainer}>
                    <Outlet />
                </div>
            </Card>
        </div>
    )
}

export default SinglePatientInfo;