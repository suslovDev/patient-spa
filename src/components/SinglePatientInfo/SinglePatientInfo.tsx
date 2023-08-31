import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';

import { USERS } from '../../mock/users.mock';
import { IUserData } from '../../types/IUserData';
import { Card } from '../Layout/Card';
import { Patient } from '../Patient';
import { PatientNavigation } from '../PatientNavigation';

import classes from './SinglePatientInfo.module.scss';

const SinglePatientInfo = (): JSX.Element => {
    const [patientData, setPatientData] = useState<IUserData | undefined>();

    const { id } = useParams();


    useEffect(() => {
        const currentUser = USERS.find(user => user.id === id);
        setPatientData(currentUser);
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