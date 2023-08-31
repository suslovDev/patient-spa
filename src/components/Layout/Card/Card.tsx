import { ReactNode } from 'react';
import classes from './Card.module.scss';
import cn from 'classnames';

export type TCardColor = 'white' | 'gray';

const Card = ({ cardColor = 'white', children }: { cardColor?: TCardColor, children: ReactNode }): JSX.Element => {
    return (
        <div className={cn(classes.card, {
            [classes.gray]: cardColor === 'gray'
        })}>{children}</div>
    )
}

export default Card;