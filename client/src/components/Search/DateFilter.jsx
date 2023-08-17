import React from 'react';
import filterStyle from "components/Search/scss/filter.module.scss";
import FilterLabel from "components/Search/FilterLabel.jsx";

function DateFilter({icon, label, name, filter, setFilter, hidden}) {
    let onChange = (e) => {
        setFilter({...filter, [e.currentTarget.name]: e.currentTarget.value})
    }
    return (
        <div className={filterStyle.dateFilter}>
            <FilterLabel icon={icon} labelText={label}/>
            <div className={filterStyle.dateFilterContainer}  style={{display:hidden ? 'none' : 'grid'}}>
                <div>
                    <span>От: </span>
                    <input type="date" name={`${name}From`} onChange={(e)=>onChange(e)}/>
                </div>
                <div>
                    <span>До: </span>
                    <input type="date" name={`${name}To`} onChange={(e)=>onChange(e)}/>
                </div>
            </div>

        </div>
    );
}

export default DateFilter;