import React, {useEffect, useState} from 'react';
import filterStyle from "components/Search/scss/filter.module.scss";
import Select from "react-select";
import FilterLabel from "components/Search/FilterLabel.jsx";
import {FilterTypes} from "components/Search/FilterTypes.js";

function SelectFilter({icon, label, name, filter, setFilter, hidden}) {
    const [options, setOptions] = useState([])
    let [isMulti, setIsMulti] = useState(false)
    useEffect(()=>{
        switch (name){
            case FilterTypes.BY_TAG.name:
                //There are options must take list of options from response of API
                setIsMulti(true)
                setOptions([
                    {label:'IT',value:'IT'},
                    {label:'Finance',value:'Finance'},
                    {label:'Web',value:'Web'},
                    {label:'AI',value:'AI'}
                ]); break;
            case FilterTypes.BY_STATUS.name:
                setOptions([
                    {label:'In process', value:'InProcess'},
                    {label:'Finished', value: 'Finished'}
                ]); break;
            case FilterTypes.BY_DEPARTMENT.name:
                setOptions([
                    {label:'Marketing', value:'1'},
                    {label:'Client Care', value:'2'},
                    {label:'Development', value:'3'},
                ]); break;
            case FilterTypes.BY_ASSIGN.name:
                setOptions([
                    {label:'Kana', value:'1'},
                    {label:'Beka', value:'2'},
                    {label:'Olzhas', value:'3'},
                ]); break;
        }
    },[])

    let onChange = (selectedOptions) => {
        if (isMulti){
            selectedOptions = selectedOptions.map((el)=> {
                return el.value
            })
        }else{
            selectedOptions = selectedOptions.value
        }
        setFilter({...filter, [name]: selectedOptions})
    }

    return (
        <div className={filterStyle.selectFilter}>
            <FilterLabel icon={icon} labelText={label}/>
            <Select options={options} isSearchable={true}
                    isMulti={isMulti} placeholder={`Choose ${label}`}
                    onChange={(selectedOptions) => onChange(selectedOptions)}
                    className={filterStyle.selectInput}
                    styles={{control:(base)=>({...base, borderRadius: '2vh', display: hidden ? 'none' : 'flex'})}}
            />
        </div>
    );
}

export default SelectFilter;