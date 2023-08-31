import { useEffect, useState } from 'react';
import classes from './NoteList.module.scss';
import { Note } from '../../../UI/Note';
import { NOTES } from '../../../../mock/notes.mock';
import { useParams } from 'react-router';
import { INote } from '../../../../types/INote';

const NoteList = (): JSX.Element => {
    const [notes, setNotes] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const userNotes = NOTES.filter(item => item.userId === id);
        setNotes(userNotes);
    }, [id])

    return (
        <div className={classes.list}>
            {notes.map((note: INote) => (
                <Note {...note} key={note.uid} />
            ))}
        </div>
    )
}

export default NoteList;