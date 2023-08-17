import React from 'react';
import kanbanStyle from "./scss/kanban.module.scss";
import curveVector from "assets/CurveVector.png";
import {HiFolderMinus} from "react-icons/hi2";
import smallVector from "assets/SmallVector.png";
import folderRec from "assets/folderRec.png";

const KanbanHeader = (props) => {
    return (
            <div className={kanbanStyle.header}>
                <div className={kanbanStyle.rootFolder}><span>{props.currentFolder}</span></div>
                <div>
                    <span><img src={curveVector} alt="vector" className={kanbanStyle.pathIcon}/></span>
                    <span>
                        <span><HiFolderMinus /></span>
                        <span>Projects</span>
                    </span>
                    <span><img src={smallVector} alt="vector" className={kanbanStyle.pathIcon}/></span>
                    <span><img src={folderRec} alt="folder" className={kanbanStyle.pathIcon}/></span>
                    <span>Team Projects</span>
                </div>
            </div>
    );
};

export default KanbanHeader;