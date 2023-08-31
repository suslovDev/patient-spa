import { PatientNavigation } from '../PatientNavigation';
import classes from './NavbarWithAction.module.scss';

const NavbarWithAction = (): JSX.Element => {
    return (
        <div className={classes.NavbarWithAction}>
            <PatientNavigation />
        </div>
    )
}

export default NavbarWithAction;