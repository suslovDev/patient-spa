import cn from 'classnames';

import { IConsultation } from '../../../types/IConsultation';
import Icon from '../../UI/Icon/Icon';

import classes from './ConsultationItem.module.scss';

export enum EConsultation {
    online = 'Online консультация',
    privat = 'Личный прием'
}


const ConsultationItem = ({ consultation }: { consultation: IConsultation }): JSX.Element => {
    const { isActive, type, date, time, isConfirmed } = consultation;
    const activeOnline = type === 'online' && isActive;
    const defaultOnline = type === 'online' && !isActive;
    const defaultPrivat = type === 'privat' && !isActive;
    return (
        <div className={cn([classes.consultation, { [classes.active]: isActive }])}>
            <div className={classes.consultation__icon}>
                {activeOnline && <Icon name='onlineActive' />}
                {defaultOnline && <Icon name='onlineDefault' />}
                {defaultPrivat && <Icon name='privatDefault' />}
            </div>
            <div className={classes.consultation__info}>
                <p className={classes.consultation__title}>{EConsultation[type]}</p>
                <span className={classes.consultation__date}>
                    {`${date}, ${time}`}
                </span>
            </div>
            {!isConfirmed && <span className={classes.consultation__notConfirmed}>Не подтверждена</span>}
        </div>
    )
}

export default ConsultationItem;