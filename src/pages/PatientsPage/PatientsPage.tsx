import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AsideActionPanel } from '../../components/AsideActionPanel';
import { Container } from '../../components/Layout/Container';
import PatientList from '../../components/PatientList/Patientlist';
import { SeachInput } from '../../components/UI/SearchInput';
import { useActivePath } from '../../hooks/useActivePath';
import { USERS } from '../../mock/users.mock';

import classes from './PatientsPage.module.scss';

const Patients = (): JSX.Element => {
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
    const [showCheckboxes, setShowCheckboxes] = useState<boolean>(false);
    const [checkedCount, setCheckedCount] = useState<number>(0);

    useActivePath(USERS[0].id);


    const handleCheckedAll = (): void => {
        setIsAllChecked(!isAllChecked);
    }
    return (
        <>
            <header className={classes.header} />
            <Container>
                <div className={classes.patientsPage}>
                    <div className={classes.patientsPage__aside}>
                        <SeachInput />
                        <AsideActionPanel onEditMode={setShowCheckboxes} isAllChecked={isAllChecked} toggleCheckbox={handleCheckedAll} checkedCount={checkedCount} />
                        <PatientList patients={USERS} isAllChecked={isAllChecked} isEditMode={showCheckboxes} onSetCount={setCheckedCount} />
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
