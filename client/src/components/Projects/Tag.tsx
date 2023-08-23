import {FC} from 'react';
import tagStyle from './scss/tag.module.scss'

interface TagProps {
    text: string
    color: 'blue' | 'red' | 'green'
}

const Tag: FC<TagProps> = ({text, color}) => {
    let colorArr = {
        blue: tagStyle.blueTag,
        red: tagStyle.redTag,
        green: tagStyle.greenTag
    };
    const selectedColor = colorArr[color];

    return (
        <div className={selectedColor}>
            {text}
        </div>
    );
}

export default Tag;
