import React from 'react';
import projectModalStyle from "./scss/projectModal.module.scss";

function DateInfo(props) {
    return (
        <div className={projectModalStyle.dateBlock}>
            <div>{props.dateName}</div>
            <div>{props.dateValue}</div>
        </div>
    );
}

export default DateInfo;