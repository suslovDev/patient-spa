import { useEffect, useState } from 'react';
import Patient from '../../Patient/Patient';
import classes from './SinglePatientInfo.module.scss';
import { IUserData } from '../../../types/IUserData';
import { USERS } from '../../../mock/users.mock';
import { PatientNavigation } from '../PatientNavigation';
import Card from '../../Layout/Card/Card';
import { NoteList } from './NoteList';
import VideoList from './VideoList/VideoList';
import ConsultationList from './ConsultationList/ConsultationList';
import EventList from './EventList/EventList';
import { Outlet, useParams } from 'react-router';

const SinglePatientInfo = (): JSX.Element => {
    const [patientData, setPatientData] = useState<IUserData | undefined>();

    const { id } = useParams();


    useEffect(() => {
        const user = USERS.find(user => user.id === id);
        setPatientData(user);
    }, [id])

    if (!patientData) return null;

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