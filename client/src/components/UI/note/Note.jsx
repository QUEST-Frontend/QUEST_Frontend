import classes from './note.module.scss'
import paperIcon from '../../../assets/navicons/paper.svg';
import threedots from '../../../assets/navicons/threedots.svg';
import Tag from '../../Projects/Tag';


const Note = ({ date, theme, text, tags }) => {
  console.log(tags)
  return (
    <div className={classes.note}>
      <div className={classes.flexcont}>
        <div style={{ display: 'flex' }}>
          <img src={paperIcon} className={classes.docicon} />
          <div className={classes.date}>{date}</div>
        </div>
        <img src={threedots} className={classes.threedots} />
      </div>
      <div className={classes.theme}>{theme}</div>
      <div className={classes.text}>{text}</div>
      <div className={classes.categories}>
        {tags.map((tag, index) => (
          <Tag key={index} text={tag[0]} color={tag[1]} />
        ))}
      </div>
    </div>
  );
};

export default Note;

