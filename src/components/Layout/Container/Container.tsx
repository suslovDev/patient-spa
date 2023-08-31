import { ReactNode } from "react";

import classes from './Container.module.scss';


const Container = ({ children }: { children: ReactNode }): JSX.Element => {
    return (
        <div className={classes.container}>{children}</div>
    )
}

export default Container;