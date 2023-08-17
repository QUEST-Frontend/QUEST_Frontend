import React from 'react';
import filterStyle from "components/Search/scss/filter.module.scss";

function FilterLabel({icon, labelText}) {
    let Icon = icon
    return <>
        <label className={filterStyle.labels}><Icon/> {labelText}:</label>
        <div style={{height: '1vh'}}></div>
    </>
}

export default FilterLabel;