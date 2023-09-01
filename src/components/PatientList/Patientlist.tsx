import { useEffect, useState } from 'react';
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

    const [data, setData] = useState(patients);
    useEffect(() => {
        const withChecked = data?.map((user: any) => {
            return { ...user, checked: false }
        });
        setData(withChecked);
    }, [])

    const handleCheck = (): void => {
        return null;
    }



    return (
        <div className={classes.patientList}>
            {data.map((patient: any) => (
                isEditMode
                    ?
                    (<PatientPlate userData={patient} isChecked={patient.isCecked} hasCheckbox={isEditMode} onSetChecked={handleCheck} />)

                    :
                    (<Link to={String(patient.id)} key={patient.uid}>
                        <PatientPlate userData={patient} isChecked={patient.isCecked} hasCheckbox={isEditMode} onSetChecked={handleCheck} />
                    </Link>)
            ))}
        </div>
    )
}

export default PatientList;

