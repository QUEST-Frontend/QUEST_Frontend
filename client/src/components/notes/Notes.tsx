import classes from './notes.module.scss';
import notesIcon from '../../assets/navicons/notes.svg';
import plusIcon from '../../assets/navicons/plus.svg';
import Note from '../UI//note/Note';
import {FC, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {notesSelector} from '../../store/features/notes/notesSlice.ts'

const Notes: FC = () => {
    const notes = useSelector(notesSelector)
    useEffect(() => {
        console.log(notes)
    }, [notes])

    return (
        <div className={classes.container}>
            <div className={classes['notes-container']}>
                <div className={classes.bar}>
                    <div className={classes['notes-first-line']}>
                        <div className={classes['notes-first-child']}>
                            <img src={notesIcon} />
                            <span>Notes</span>
                        </div>
                        <img src={plusIcon} />
                    </div>

                    <div className={classes.scrollable}>
                        <div className={classes.notes}>
                            {notes.map((note, index) => (
                                <Note
                                    key={index}
                                    title={note.title}
                                    text={note.text}
                                    isFavourite={note.is_favorite}
                                    className={classes['note-item']}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Notes;
