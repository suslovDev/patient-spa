import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AsideActionPanel } from '../../components/AsideActionPanel';
import { Container } from '../../components/Layout/Container';
import PatientList from '../../components/PatientList/Patientlist';
import { SeachInput } from '../../components/UI/SearchInput';
import { USERS } from '../../mock/users.mock';

import classes from './PatientsPage.module.scss';

const Patients = (): JSX.Element => {
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
    const [showCheckboxes, setShowCheckboxes] = useState<boolean>(false);

    const handleCheckedAll = (): void => {
        return null;
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
