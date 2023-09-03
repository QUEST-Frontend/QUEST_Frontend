import {type FC, useMemo} from 'react'
// @ts-ignore
import cl from './Kanban.module.scss'
import {BsPlus} from 'react-icons/bs'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import KanbanCard from 'components/kanban/KanbanCard.tsx'
import {ITask} from '../../models/ITask.ts'
import {useDroppable} from '@dnd-kit/core'
import {SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable'

interface KanbanRowProps {
  id: number | string
  headerText: string
  headerColor: string
  createTask: (columnId: string | number) => void
  tasks: ITask[] | undefined
}

export const KanbanColumn: FC<KanbanRowProps> = ({id, headerColor, headerText, createTask, tasks}) => {
  const tasksId = useMemo(() => tasks?.map(task => task.id), [tasks])
  const {setNodeRef} = useDroppable({
    id,
    data: {
      columnId: id
    }
  })

  return (
      <div>
        <div className={cl.headerItem}>
          <div className={cl.headerStatus}>
            <div className={cl.statusSquare} style={{backgroundColor: headerColor}}/><span>{headerText}</span>
          </div>
          <div className={cl.headerIcons}>
            <div className={cl.plusIcon}><BsPlus style={{fontSize: '1rem', fontWeight: 700}}/></div>
            <BiDotsHorizontalRounded/>
          </div>
        </div>

          <div className={cl.tasks} ref={setNodeRef}>
            <SortableContext items={tasksId as number[]} id={id as string} >
              {tasks?.map(task => <KanbanCard key={task.id} id={task.id} tags={task.task_tags} name={task.name} users={task.assigned_users} columnId={task.column}/>)}
            </SortableContext>
          </div>
      </div>
  )
}
