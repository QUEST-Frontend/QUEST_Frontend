import React, {useState} from 'react';
import kanbanStyle from './scss/kanban.module.scss'
import KanbanRow from "./KanbanRow.jsx";
import {DragDropContext} from "react-beautiful-dnd";
import {kanbanState} from "./kanbanState.js";

function KanbanBoard(props) {
    let [kanban, setKanban] = useState(kanbanState)
    let onDragEnd = (result) => {
        console.log(result)
        let destination = result.destination;
        let source = result.source;

        if(!!destination){
            let kanbanCopy = JSON.parse(JSON.stringify(kanban))
            let sourceItems = kanbanCopy[source.droppableId].items;
            let destinationItems = kanbanCopy[destination.droppableId].items;

            let dragCard = sourceItems[source.index];
            sourceItems.splice(source.index, 1)
            destinationItems.splice(destination.index, 0, dragCard)

            setKanban(kanbanCopy)
        }

    }
    return (
        <DragDropContext onDragEnd={(result)=>onDragEnd(result)} >
                    <div className={kanbanStyle.kanban} >
                        {Object.entries(kanban).map(([key, val]) => {
                            let uiData = {cardArr:val.items, status:val.title, key: key}
                            return <KanbanRow uiData={uiData}/>
                        })}
                    </div>
        </DragDropContext>
    );
}

export default KanbanBoard;