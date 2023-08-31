
import { TButtonVariant } from '../../../types/TButtonVariant';
import Icon from '../Icon/Icon';

import classes from './Button.module.scss';


const Button = ({ children, variant = 'standart', handleClick = () => null }: { children: string, variant?: TButtonVariant, handleClick?: () => void }): JSX.Element => {
    return (
        <button className={classes.button} onClick={handleClick}>
            <span className={classes.button__title}>{children}</span>
            {variant === 'add' && <Icon name='plus' />}
        </button>
    )
}

export default Button;