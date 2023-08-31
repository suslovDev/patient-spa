import { ReactElement } from 'react';
import classes from './PatientPlate.module.scss';
import cn from 'classnames';
import { IUserData } from '../../types/IUserData';
import Checkbox from '../UI/Checkbox/Checkbox';

const PatientPlate = ({
    hasCheckbox = false,
    isChecked = false,
    extraIcon = null,
    isActive = false,
    userData
}: {
    hasCheckbox?: boolean;
    extraIcon?: ReactElement;
    isActive?: boolean;
    isChecked?: boolean;
    userData: IUserData;
}): JSX.Element => {
    const { firstName, secondName, avatarUrl } = userData;
    return (
        <div className={cn(classes.patient, { [classes.active]: isActive })}>
            <div className={classes.patient__info}>
                {hasCheckbox && <Checkbox />}
                <div className={classes.patient__avatar}><img src={avatarUrl} alt="Patient avatar" /></div>
                <p className={classes.patient__name}>{`${firstName} ${secondName}`}</p>
            </div>
            {extraIcon && <div className={classes.patient__extra}>{extraIcon}</div>}
        </div>
    )
}

export default PatientPlate;