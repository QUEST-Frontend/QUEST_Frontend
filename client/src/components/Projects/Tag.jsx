import React from 'react';
import tagStyle from './scss/tag.module.scss'

function Tag(props) {
    let colorArr = {
        blue: tagStyle.blueTag,
        red: tagStyle.redTag,
        green: tagStyle.greenTag
    };
    const selectedColor = colorArr[props.color];

    return (
        <div className={selectedColor}>
            {props.text}
        </div>
    );
}

export default Tag;