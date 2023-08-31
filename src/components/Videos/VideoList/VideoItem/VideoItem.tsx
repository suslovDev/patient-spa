import classes from './VideoItem.module.scss';


const VideoItem = ({ url, title, author, dateRange }: { url: string, title: string, author: string, dateRange?: string }): JSX.Element => {
    return (
        <div className={classes.video}>
            <div className={classes.video__preview}>
                <img src={url} alt={title} width={'100%'} />
            </div>
            <div className={classes.video__info}>
                <p className={classes.video__title}>{title}</p>
                <div className={classes.video__extra}>
                    <span>{author}</span>
                    <span>{dateRange}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoItem; 