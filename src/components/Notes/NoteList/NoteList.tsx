import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { NOTES } from '../../../mock/notes.mock';
import { INote } from '../../../types/INote';
import { Note } from '../Note';

import classes from './NoteList.module.scss';

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