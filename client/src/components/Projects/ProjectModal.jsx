import React from 'react';
import projectModalStyle from './scss/projectModal.module.scss'
import KanbanHeader from "components/Kanban/KanbanHeader.jsx";
import ProjectAcc from "./ProjectAcc.jsx";
import Grad1 from "assets/gradient1.png";
import DateInfo from "./DateInfo.jsx";
import CardDataItem from "components/Kanban/CardDataItem.jsx";
import {FaSquareArrowUpRight} from "react-icons/fa6";
import {TfiClose} from "react-icons/tfi";
import {MdEdit} from "react-icons/md";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {Link} from "react-router-dom";
import {cardDataTable} from "components/Kanban/CardDataTable.js";

function ProjectModal({project}) {
    let cardTableParams = {
        created: project.createdTime,
        tags: project.tags,
        assign: project.assign,
        priority: project.priority
    }
    return (
        <div className={projectModalStyle.container}>
            <div className={projectModalStyle.head}>
                <KanbanHeader currentFolder={'Ritual KAS'}/>
                <div>
                    <button><MdEdit/></button>
                    <button><BiDotsHorizontalRounded/></button>
                </div>
            </div>

            <div className={projectModalStyle.imageContainer}
                 style={{background: `center / cover no-repeat url('${Grad1}')`}}>
                <div className={projectModalStyle.fixedInfo}>
                    <ProjectAcc project={project} withMoreBtn={false} light={true}/>
                    <DateInfo dateName={'CREATED'} dateValue={project.createdTime}/>
                    <DateInfo dateName={'DEADLINE'} dateValue={project.deadline}/>
                    <DateInfo dateName={'TRACKED TIME'} dateValue={project.trackedTime}/>
                </div>
            </div>

            <div className={projectModalStyle.detailsContainer}>
                <div>
                    {
                        cardDataTable(cardTableParams).map((data) => {
                            return <CardDataItem data={data}/>
                        })
                    }

                </div>

                <div className={projectModalStyle.description}>
                    <div>Description</div>
                    <div className={projectModalStyle.descText}>
                        {project.long_desc}
                    </div>
                </div>
            </div>
            <div className={projectModalStyle.controlBtns}>

                <div></div>
                <div>
                    <Link to={`/tasks/${project.id}`}>
                        <button>Go to tasks <span><FaSquareArrowUpRight/></span></button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default ProjectModal;
