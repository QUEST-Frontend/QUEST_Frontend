import React, {useState} from 'react';
import filterStyle from './scss/filter.module.scss';
import {IoFilter} from "react-icons/io5";
import {date_filters, selection_filters} from "components/Search/FilterTypes.js";
import SelectFilter from "components/Search/SelectFilter.jsx";
import DateFilter from "components/Search/DateFilter.jsx";

function Filter({filter, setFilter, filterList}) {
    const [hidden, setHidden] = useState(true)
    return (
        <div className={filterStyle.container}>
            <div>
                <button className={filterStyle.filterBtn}
                         onClick={()=>setHidden(!hidden)}><IoFilter/></button>
            </div>

            <div className={filterStyle.filters}>
                {selection_filters.map((f)=>{
                    if(filterList.includes(f)) {
                        return <SelectFilter label={f.label} icon={f.icon}
                                             name={f.name} filter={filter}
                                             setFilter={setFilter} hidden={hidden}/>
                    }
                })}

                {date_filters.map((f)=> {
                    if (filterList.includes(f)) {
                        return <DateFilter label={f.label} icon={f.icon} name={f.name}
                                           filter={filter} setFilter={setFilter} hidden={hidden}/>
                    }
                })}
            </div>
        </div>
    );
}

export default Filter;
