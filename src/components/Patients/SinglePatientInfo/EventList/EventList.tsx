import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { EVENTS } from '../../../../mock/events.mock';
import { IEvent } from '../../../../types/IEvent';
import { EventItem } from '../../../Events/EventList/EventItem';

import classes from './EventList.module.scss';

const EventList = (): JSX.Element => {
    const [events, setEvents] = useState([]); 

    const { id } = useParams();

    useEffect(() => {
        const userEvents = EVENTS.filter(item => item.userId === id);
        setEvents(userEvents);
    }, [id])

    return (
        <div className={classes.list}>
            {events.map((event: IEvent) => (
                <EventItem {...event} key={event.uid} />
            ))}
        </div>
    )
}

export default EventList;