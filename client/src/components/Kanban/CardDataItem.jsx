import React from 'react';
import cardOpenedStyle from "./scss/cardOpened.module.scss";
import Tag from "../Projects/Tag.tsx";
import kanbanCardStyle from "./scss/kanbanCard.module.scss";
import {MdOutlineAlternateEmail} from "react-icons/md";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const CardDataItem = ({data}) => {
    let Icon = data.icon
    return (
        <div className={cardOpenedStyle.dataItem}>
            <div className={cardOpenedStyle.itemName}>
                <div><Icon /></div>
                <div>{data.name}</div>
            </div>
            <div className={cardOpenedStyle.itemValue}>
                {
                    getElementByValueType(data.valueType, data.value)
                }
            </div>
            <div></div>
        </div>
    );
};
export default CardDataItem

function getElementByValueType(valueType, value){
    switch (valueType) {
        case ItemDataType.TEXT:
            return  <span>{value}</span>;
        case ItemDataType.TAG:
            return <div className={cardOpenedStyle.tagContainer}> {value.map((v) => {
                return <Tag text={v} color={'blue'}/>
            })}</div>;


        case ItemDataType.DOER_TAG:
            return <div className={cardOpenedStyle.doers}>{value.map((v)=>{
                return <span className={kanbanCardStyle.infoTag}>
                            <span><MdOutlineAlternateEmail/></span>
                            <span>{v}</span>
                        </span>
            })}</div>

        case ItemDataType.GRAY_TAG:
            return <span className={kanbanCardStyle.infoTag}>
                            <span>{value}</span>
                        </span>;


        case ItemDataType.FOLDER:
            return <div><span>Team Projects</span><span style={{margin:"0 0.2vw", color:"#8c8c8c", fontSize:'1.2em'}}><HiOutlineArrowNarrowRight /></span><span>{value}</span></div>;

    }
}

export let ItemDataType = {
    TEXT: 'TEXT',
    TAG: 'TAG',
    DOER_TAG: 'DOER_TAG',
    GRAY_TAG: 'GRAY_TAG',
    FOLDER: 'FOLDER'
}
