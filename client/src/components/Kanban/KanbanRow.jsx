import React from 'react';
import kanbanRowStyle from './scss/kanbanRow.module.scss'
import { BsPlusSquareFill } from "react-icons/bs";
import {IoEllipsisHorizontal} from "react-icons/io5";
import KanbanCard from "./KanbanCard.jsx";
import {Droppable} from "react-beautiful-dnd";

function KanbanRow({uiData}) {
    let colorCls = kanbanRowStyle.defDot;
    switch (uiData.key){
        case 'inProgress':
            colorCls = kanbanRowStyle.progressDot;break;
        case 'done':
            colorCls = kanbanRowStyle.doneDot;break;
        default: break;
    }
    return (
        <Droppable droppableId={uiData.key}>
            {(provided, snapshot)=>(
            <div className={kanbanRowStyle.row}>
                <div className={kanbanRowStyle.header}>
                    <div><span className={[kanbanRowStyle.rowName, colorCls].join(' ')}
                        style={{color:snapshot.isDraggingOver ? '#212121' : '#9b9ba1'}}
                    >{uiData.status}</span></div>
                    <div><button><BsPlusSquareFill /></button> <button><IoEllipsisHorizontal /></button></div>
                </div>
                <div className={kanbanRowStyle.tasks}
                     ref={provided.innerRef} {...provided.draggableProps}
                     style={{background:snapshot.isDraggingOver ? '#f4f6f2':'#F9F8FF'}}>
                    {uiData.cardArr.map((card, index)=>{
                        let cardData = {card:card, index:index, status:uiData.status}
                        return <KanbanCard cardData={cardData}/>
                    })}
                    {provided.placeholder}
                </div>
            </div>
            )
            }
        </Droppable>
    );
}

export default KanbanRow;