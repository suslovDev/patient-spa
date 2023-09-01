
import { ReactElement } from "react";
import cn from 'classnames';

import classes from './Checkbox.module.scss';

const Checkbox = ({ labelText = null, checked, onSetChecked, }: { labelText?: ReactElement, checked?: boolean, onSetChecked: any }): JSX.Element => {

    return (
        <label className={classes.checkbox}>
            <input className={classes.checkbox__input}
                type="checkbox"
                onChange={onSetChecked}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" className={cn(classes.checkbox__box, {
                [classes.checkbox__active]: checked
            })}>
                <path fillRule="evenodd" clipRule="evenodd" d="M2.94899 5.41864L1.14963 3.58088L0 4.75505L2.00133 6.79941L3.17667 8L8 0.952633L6.66793 0L2.94899 5.41864Z" fill="white" />
            </svg>
            {labelText && labelText}
        </label>
    );
}

export default Checkbox;
