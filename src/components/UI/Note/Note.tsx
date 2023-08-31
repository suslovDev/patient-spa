import Dropdown from "../Dropdown";
import WithBorder from "../WithBorder";

import classes from './Note.module.scss';



const Note = (
    {
        date,
        content,
        imageUrl = null
    }: {
        date: string;
        content: string;
        imageUrl?: string
    }
): JSX.Element => {
    return (
        <section className={classes.note}>
            <article className={classes.note__article}>
                <p className={classes.note__content}>
                    <span className={classes.note__date}>{date}</span>
                    {content}
                </p>
                <Dropdown />
            </article>
            {imageUrl && <WithBorder src={imageUrl} />}
        </section >
    )
}

export default Note;