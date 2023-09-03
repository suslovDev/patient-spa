

import { useLocation } from 'react-router';

import { IMapPathBtn } from '../../types/IMapPathBtn';
import Button from '../UI/AddButton/Button';
import { NavLink } from '../UI/NavLink';

import classes from './PatientNavigation.module.scss';


const MapPathBtn: IMapPathBtn = {
    notes: 'Новая заметка',
    consultations: 'Записать',
    videos: 'Рекомендовать',
    events: 'Рекомендовать',
}

const PatientNavigation = (): JSX.Element => {

    const location = useLocation();
    const curPath = location.pathname.split('/').pop();


    return (
        <div className={classes.wrap}>
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
            <Button variant='add'>{MapPathBtn[curPath as keyof IMapPathBtn]}</Button>
        </div>
    )
}

export default PatientNavigation;