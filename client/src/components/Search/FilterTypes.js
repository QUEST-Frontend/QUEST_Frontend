import {FaNetworkWired, FaTags, FaUserTie} from "react-icons/fa";
import {GiLevelEndFlag, GiSandsOfTime} from "react-icons/gi";
import {MdOutlineAccessTime} from "react-icons/md";

export const FilterTypes = {
    BY_TAG: {icon: FaTags, label: 'Tags', name:'tags'},
    BY_STATUS: {icon: GiLevelEndFlag, label: 'Status', name:'status'},
    BY_DEPARTMENT: {icon: FaNetworkWired, label: 'Department', name:'department'},
    BY_ASSIGN: {icon: FaUserTie, label: 'Assign', name:'assigns'},
    BY_CREATED_DATE: {icon: MdOutlineAccessTime, label: 'Created between', name:'created'},
    BY_DEADLINE_DATE: {icon: GiSandsOfTime, label: 'Deadline between', name:'deadline'}
}

export const selection_filters = [FilterTypes.BY_TAG, FilterTypes.BY_STATUS, FilterTypes.BY_DEPARTMENT, FilterTypes.BY_ASSIGN]
export const  date_filters = [FilterTypes.BY_CREATED_DATE, FilterTypes.BY_DEADLINE_DATE]