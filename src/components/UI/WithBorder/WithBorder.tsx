import classes from './WithBorder.module.scss';


const WithBorder = ({ src }: { src: string }): JSX.Element => {
    return (
        <div className={classes.border}>
            <img src={src} width={'100%'} />
        </div>
    )
}

export default WithBorder;