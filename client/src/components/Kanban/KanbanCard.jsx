import React, {useState} from 'react';
import kanbanCardStyle from './scss/kanbanCard.module.scss'
import Tag from "../Projects/Tag.jsx";
import {IoDocumentText} from "react-icons/io5";
import {MdOutlineAlternateEmail} from "react-icons/md";
import {Draggable} from "react-beautiful-dnd";
import {FiExternalLink} from "react-icons/fi";
import KanbanModal from "./KanbanModal.jsx";
import Modal from "./../UI/modal/Modal.jsx";
import {tasks} from "./kanbanState.js";

function KanbanCard({cardData}) {
    const [visible, setVisible] = useState(false)

    return (
        <Draggable draggableId={cardData.card.id}
                   key={cardData.card.id}
                   index={cardData.index}
                   isDragDisabled={visible}>

            {(provided) => (
                <div className={kanbanCardStyle.card}
                     ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                    <Modal children={<KanbanModal card={cardData.card} status={cardData.status} />} visible={visible} setVisible={setVisible}/>

                    <div className={kanbanCardStyle.cardTags}>
                        {cardData.card.tagArr.map((tag) => {
                            return <Tag text={tag} color={'red'}/>
                        })}
                    </div>
                    <div className={kanbanCardStyle.todo}>
                        <span><IoDocumentText/></span>
                        <span>{cardData.card.todo}</span>
                    </div>
                    <div className={kanbanCardStyle.cardInfo}>
                        <div>
                        <span className={kanbanCardStyle.infoTag}>
                            <span><MdOutlineAlternateEmail/></span>
                            <span>{cardData.card.assign}</span>
                        </span>
                        </div>
                        <div>
                            <span className={kanbanCardStyle.infoTag}>{cardData.card.size}</span>
                        </div>
                    </div>
                    <div className={kanbanCardStyle.openBtn}>
                        <button onClick={() => {
                            setVisible(true)
                        }}><span><FiExternalLink/></span> Подробнее</button>
                    </div>
                    {provided.placeholder}
                </div>

            )}
        </Draggable>
    );
}

export default KanbanCard;