import classes from './notes.module.scss';
import notesIcon from '../../assets/navicons/notes.svg';
import plusIcon from '../../assets/navicons/plus.svg';
import Note from '../UI//note/Note';

const Notes = () => {
    const tags = [
        ['Science', 'red'],
        ['Tech', 'blue'],
        ['Hi-fi', 'green'],
    ];
    const notesData = [
        {
            date: "2 Apr. 2023",
            theme: "ChatGPT Tricks for business marketing",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu slorem ipsum dolor sit amet",
            tags: tags,
        },
        {
            date: "4 May. 2023",
            theme: "Some italic theme with a small font",
            text: "Dolor in a small font with a small font background color",
            tags: tags,
        },

    ];
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
                            {notesData.map((note, index) => (
                                <Note
                                    key={index}
                                    date={note.date}
                                    theme={note.theme}
                                    text={note.text}
                                    tags={note.tags}
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
