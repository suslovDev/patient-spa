import Icon from '../../../UI/Icon/Icon';
import classes from './EventItem.module.scss';


const EventItem = ({ event, title, date, time }: { event: string, title: string, date: string, time: string }): JSX.Element => {
    return (
        <div className={classes.event}>
            <div className={classes.event__preview}>
                <img src={'/images/event.png'} />
            </div>
            <div className={classes.event__content}>
                <p className={classes.event__title}>{title}</p>
                <div className={classes.event__info}>
                    <div className={classes.event__infoDetail}><Icon name={'camera'} /><span>{event}</span></div>
                    <div className={classes.event__infoDetail}><Icon name={'calendar'} /><span>{date}</span></div>
                    <div className={classes.event__infoDetail}><Icon name={'clock'} /><span>{time}</span></div>
                </div>
            </div>
        </div>
    )
}

export default EventItem;