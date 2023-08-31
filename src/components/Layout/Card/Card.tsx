import { ReactNode } from 'react';
import cn from 'classnames';

import classes from './Card.module.scss';

export type TCardColor = 'white' | 'gray';

const Card = ({ cardColor = 'white', children }: { cardColor?: TCardColor, children: ReactNode }): JSX.Element => {
    return (
        <div className={cn(classes.card, {
            [classes.gray]: cardColor === 'gray'
        })}>{children}</div>
    )
}

export default Card;