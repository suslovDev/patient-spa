import { useMatch } from 'react-router';
import classes from './PatientNavigation.module.scss';
import { NavLink } from '../../UI/NavLink';

const PatientNavigation = (): JSX.Element => {

    return (
        <ul className={classes.patientNavigation}>
            <li className={classes.patientNavigation__link}>
                <NavLink to='notes'>Заметки</NavLink>
            </li>
            <li className={classes.patientNavigation__link}>
                <NavLink to="consultations">Консультации</NavLink>
            </li>
            <li className={classes.patientNavigation__link}>
                <NavLink to="videos">Видео</NavLink>
            </li>
            <li className={classes.patientNavigation__link}>
                <NavLink to="events">Мероприятия</NavLink>
            </li>
        </ul>
    )
}

export default PatientNavigation;