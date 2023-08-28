// import cardOpenedStyle from './scss/cardOpened.module.scss'
// import KanbanHeader from "./KanbanHeader.jsx";
// import CardDataItem from "./CardDataItem.jsx";
// import {MdEdit} from "react-icons/md";
// import {BiDotsHorizontalRounded} from "react-icons/bi";
// import {cardDataTable} from "./CardDataTable.js";
//
// const KanbanModal = ({card, status}) => {
//     if (card) {
//         let cardTableParams = {
//             created: card.created_date,
//             tags: card.tagArr,
//             assign: card.assign,
//             priority: card.size,
//             status: status
//         }
//         return (
//             <div className={cardOpenedStyle.container}>
//                 <KanbanHeader currentFolder={card.todo}/>
//                 <div className={cardOpenedStyle.cardData}>
//                     {
//                         cardDataTable(cardTableParams).map((data)=>{
//                         return <CardDataItem data={data}/>
//                     })}
//
//                 </div>
//                 <div className={cardOpenedStyle.description}>
//                     <div className={cardOpenedStyle.descTitle}>
//                         <div>Description</div>
//                         <div>
//                             <button className={cardOpenedStyle.editBtn}><MdEdit/></button>
//                             <button className={cardOpenedStyle.editBtn}><BiDotsHorizontalRounded/></button>
//                         </div>
//                     </div>
//                     <div className={cardOpenedStyle.descText}>
//                         {card.description}
//                     </div>
//                 </div>
//             </div>
//         );
//     }else{
//         return <></>
//     }
// };
//
// export default KanbanModal;
