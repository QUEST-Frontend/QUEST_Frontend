import {FC} from 'react'
import classes from './note.module.scss'
import paperIcon from '../../../assets/navicons/paper.svg';
import threedots from '../../../assets/navicons/threedots.svg';
import {ITag} from '../../../types.ts'


interface NoteProps {
  date: string
  theme: string
  text: string
  tags: ITag[]
  className: string
}

const Note: FC<NoteProps> = ({ date, theme, text, tags, className }) => {
  console.log(tags)
  return (
    <div className={classes.note + " " + className}>
      <div className={classes.flexcont}>
        <div style={{ display: 'flex' }}>
          <img src={paperIcon} className={classes.docicon} />
          <div className={classes.date}>{date}</div>
        </div>
        <img src={threedots} className={classes.threedots} />
      </div>
      <div className={classes.theme}>{theme}</div>
      <div className={classes.text}>{text}</div>
      {/*<div className={classes.categories}>*/}
      {/*  {tags.map((tag, index) => (*/}
      {/*    <Tag key={index} text={tag.name} color={tag.color} />*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
};

export default Note;

