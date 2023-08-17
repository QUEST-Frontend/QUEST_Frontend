import React, {useState} from 'react';
import searchStyle from './scss/search.module.scss'
import {useForm} from "react-hook-form";
import {ImSearch} from "react-icons/im";
import {IoClose} from "react-icons/io5";

function Search({search, setSearch, style}) {
    let isEmpty = search === '' || search === undefined

    return (
        <div className={searchStyle.container} style={{...style}}>
            <div className={searchStyle.searchInput}>
                <input type="text" placeholder='Search'
                       value={search}
                       onChange={(e)=>{setSearch(e.currentTarget.value)}}/>
            </div>
            <div className={searchStyle.searchReset}>
                <button style={isEmpty ? {visibility:'hidden'} : {visibility: 'visible'} }
                        onClick={()=>setSearch('')}><IoClose /></button>
            </div>
            <div className={searchStyle.searchIcon}>
                <button><ImSearch /></button>
            </div>
            <div style={{width:'2vw'}}></div>
        </div>
    );
}

export default Search;