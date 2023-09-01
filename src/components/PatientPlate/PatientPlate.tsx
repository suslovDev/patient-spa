import { ReactElement } from 'react';
import cn from 'classnames';

import { IUserData } from '../../types/IUserData';
import { Checkbox } from '../UI/Checkbox';

import classes from './PatientPlate.module.scss';

const PatientPlate = ({
    onSetChecked,
    hasCheckbox = false,
    isChecked = false,
    extraIcon = null,
    isActive = false,
    userData
}: {
    onSetChecked?: any,
    hasCheckbox?: boolean;
    extraIcon?: ReactElement;
    isActive?: boolean;
    isChecked?: boolean;
    userData: IUserData;
}): JSX.Element => {
    const { firstName, secondName, avatarUrl, uid } = userData;


    return (
        <div className={cn(classes.patient, { [classes.active]: isActive })}>
            <div className={classes.patient__info}>
                {hasCheckbox && <Checkbox checked={isChecked} onSetChecked={() => onSetChecked(uid)} />}
                <div className={classes.patient__avatar}><img src={avatarUrl} alt="Patient avatar" /></div>
                <p className={classes.patient__name}>{`${firstName} ${secondName}`}</p>
            </div>
            {extraIcon && <div className={classes.patient__extra}>{extraIcon}</div>}
        </div>
    )
}

export default PatientPlate;