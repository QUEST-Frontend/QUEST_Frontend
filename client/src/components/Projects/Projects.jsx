import React, {useEffect, useRef, useState} from 'react';
import projectsStyle from './scss/projects.module.scss'
import {IoTimeOutline} from "react-icons/io5";
import ProjectCard from "./ProjectCard.jsx";
import {projects} from "./projectState.js";
import Search from "components/Search/Search.jsx";
import Filter from "components/Search/Filter.jsx";
import {FilterTypes} from "components/Search/FilterTypes.js";

function Projects(props) {
    let containerRef = useRef(null)
    const [search, setSearch] = useState()
    const [filter, setFilter] = useState()

    useEffect(()=>{
        console.log(filter)
        console.log(search)
        //There are API requests OR some filtration with state
    },[filter, search])

    let filterList = [FilterTypes.BY_TAG, FilterTypes.BY_STATUS,
        FilterTypes.BY_DEPARTMENT, FilterTypes.BY_DEADLINE_DATE, FilterTypes.BY_CREATED_DATE]

    return (
        <div className={projectsStyle.container} ref={containerRef}>
            <Search search={search} setSearch={setSearch} style={{width:'80%'}}/>
            <Filter filterList={filterList} filter={filter} setFilter={setFilter}/>
            <div className={projectsStyle.titleBlock}>
                <div className={projectsStyle.titleIconBlock}>
                    <IoTimeOutline className={projectsStyle.titleIcon}/>
                </div>
                <div>Latest Projects</div>
            </div>

            <div className={projectsStyle.cardContainer}>
                {
                    projects.map((p) => {
                        return <ProjectCard project={p} containerRef={containerRef}/>

                    })
                }

            </div>

        </div>
    );
}

export default Projects;
