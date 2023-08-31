import { ReactNode } from 'react';
import cn from 'classnames';

import { TCardColor } from '../../../types/TCardColor';

import classes from './Card.module.scss';


const Card = ({ cardColor = 'white', children }: { cardColor?: TCardColor, children: ReactNode }): JSX.Element => {
    return (
        <div className={cn(classes.card, {
            [classes.gray]: cardColor === 'gray'
        })}>{children}</div>
    )
}

export default Card;