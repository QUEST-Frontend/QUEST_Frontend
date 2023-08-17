import kanbanStyle from "./scss/kanban.module.scss";
import KanbanBoard from "./KanbanBoard.jsx";
import KanbanHeader from "./KanbanHeader.jsx";
import Filter from "components/Search/Filter.jsx";
import {useEffect, useState} from "react";
import {FilterTypes} from "components/Search/FilterTypes.js";

function Kanban(props) {
    const [filter, setFilter] = useState()
    useEffect(() => {
        console.log(filter)
        //There are API requests OR some filtration with state
    }, [filter]);
    let filterList = [FilterTypes.BY_TAG, FilterTypes.BY_ASSIGN]
    return (
        <div className={kanbanStyle.container}>
            <KanbanHeader currentFolder={'Ritual Kas'}/>
            <Filter filterList={filterList} filter={filter} setFilter={setFilter}/>
            <div className={kanbanStyle.boardContainer}>
                <KanbanBoard />
            </div>

        </div>
    );
}

export default Kanban;