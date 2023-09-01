import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { IUserData } from '../../types/IUserData';
import { PatientPlate } from '../PatientPlate';

import classes from './PatientList.module.scss';

const PatientList = ({
    patients,
    isAllChecked,
    isEditMode,
    onSetCount
}: {
    patients: IUserData[],
    isAllChecked: boolean,
    isEditMode: boolean,
    onSetCount: (count: number) => void
}): JSX.Element => {

    const [patientsData, setPatientsData] = useState(patients);
    useEffect(() => {
        const withChecked = patientsData?.map((p) => {
            return { ...p, checked: isAllChecked }
        });
        setPatientsData(withChecked);
    }, [isAllChecked]);

    useEffect(() => {
        //@ts-ignore
        const checkedCount = patientsData.reduce((acc, item) => item.checked ? acc + 1 : acc, 0);
        onSetCount(checkedCount);
    });



    const handleCheck = (id: string): void => {
        const updatedData = patientsData.map(p => {
            //@ts-ignore
            return p.uid !== id ? p : { ...p, checked: !p.checked }
        })
        setPatientsData(updatedData);
    }


    return (
        <div className={classes.patientList}>
            {patientsData.map((patient: any) => (
                isEditMode
                    ?
                    (<PatientPlate
                        key={patient.uid}
                        userData={patient}
                        isChecked={patient.checked}
                        hasCheckbox={isEditMode}
                        onSetChecked={handleCheck} />)
                    :
                    (<Link to={String(patient.id)} key={patient.uid}>
                        <PatientPlate
                            userData={patient}
                            isChecked={patient.checked}
                            hasCheckbox={isEditMode}
                            onSetChecked={handleCheck} />
                    </Link>)
            ))}
        </div>
    )
}

export default PatientList;

