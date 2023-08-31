import classes from './Counter.module.scss';
import cn from 'classnames';

const Counter = ({ count, isActive = false }: { count: number, isActive?: boolean }): JSX.Element => {
    return (
        <span className={cn(classes.counter, { [classes.active]: isActive })}>{count}</span>
    )
}

export default Counter;