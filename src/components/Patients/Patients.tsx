import { useState } from 'react';
import { USERS } from '../../mock/users.mock';
import { AsideActionPanel } from '../AsideActionPanel';
import Container from '../Layout/Container/Container';
import { SeachInput } from '../UI/SearchInput';
import PatientList from './PatientList/Patientlist';
import classes from './Patients.module.scss';
import { SinglePatientInfo } from './SinglePatientInfo';
import { Outlet } from 'react-router-dom';

const Patients = (): JSX.Element => {
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
    const [showCheckboxes, setShowCheckboxes] = useState<boolean>(false);

    const handleCheckedAll = (): void => {

    }
    return (
        <>
            <header className={classes.header} />
            <Container>
                <div className={classes.patientsPage}>
                    <div className={classes.patientsPage__aside}>
                        <SeachInput />
                        <AsideActionPanel onEditMode={setShowCheckboxes} toggleCheckbox={handleCheckedAll} />
                        <PatientList patients={USERS} isAllChecked={isAllChecked} isEditMode={showCheckboxes} />
                    </div>
                    <div className={classes.patientsPage__content}>
                        <Outlet />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Patients;
