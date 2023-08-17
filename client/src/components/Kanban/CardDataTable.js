import {MdAccessTimeFilled} from "react-icons/md";
import {ItemDataType} from "./CardDataItem.jsx";
import {GiPriceTag} from "react-icons/gi";
import {FaUserTie} from "react-icons/fa";
import {VscGroupByRefType} from "react-icons/vsc";
import {SiOpslevel} from "react-icons/si";
import React from "react";

export let cardDataTable = (data) => {
    let result = [{
        icon: MdAccessTimeFilled,
        name: 'Created At',
        value: data.created,
        valueType: ItemDataType.TEXT
    },
    {
        icon: GiPriceTag,
        name: 'Tags',
        value: data.tags,
        valueType: ItemDataType.TAG
    },
    {
        icon: FaUserTie,
        name: 'Assign',
        value: data.assign,
        valueType: ItemDataType.DOER_TAG
    },
    {
        icon: VscGroupByRefType,
        name: 'Group',
        value: 'Beauty',
        valueType: ItemDataType.FOLDER
    },
    {
        icon: SiOpslevel,
        name: 'Priority',
        value: data.priority,
        valueType: ItemDataType.GRAY_TAG
    },
    {
        icon: MdAccessTimeFilled,
        name: 'Status',
        value: data.status,
        valueType: ItemDataType.GRAY_TAG
    }]

    return result.filter((r)=>r.value)
}
