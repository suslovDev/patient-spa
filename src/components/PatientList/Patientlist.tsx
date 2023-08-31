import { Link } from 'react-router-dom';

import { IUserData } from '../../types/IUserData';
import { PatientPlate } from '../PatientPlate';

import classes from './PatientList.module.scss';

const PatientList = ({
    patients,
    isAllChecked,
    isEditMode
}: {
    patients: IUserData[],
    isAllChecked: boolean,
    isEditMode: boolean
}): JSX.Element => {

    return (
        <div className={classes.patientList}>
            {patients.map((patient: IUserData) => (
                <Link to={String(patient.id)} key={patient.uid}>
                    <PatientPlate userData={patient} isChecked={isAllChecked} hasCheckbox={isEditMode} />
                </Link>
            ))}
        </div>
    )
}

export default PatientList;

