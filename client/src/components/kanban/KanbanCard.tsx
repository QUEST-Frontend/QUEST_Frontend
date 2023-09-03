import {FC} from 'react'
import {ITag} from '../../models/ITag.ts'
import Tag from 'components/UI/tag/Tag.tsx'
import {HiDocumentDuplicate} from 'react-icons/hi'
import cl from './Kanban.module.scss'
import {IPerson} from '../../models/IPerson.tsx'
import Button from 'components/UI/button/Button.tsx'
import {useDraggable} from '@dnd-kit/core'
import {CSS} from '@dnd-kit/utilities'
import {useSortable} from '@dnd-kit/sortable'

interface KanbanCardProps {
  id: number
  tags: ITag[]
  name: string
  users: IPerson[]
  columnId: number
}

const KanbanCard: FC<KanbanCardProps> = ({id, tags, name, users, columnId, }) => {
  const { attributes, listeners, transform, setNodeRef } = useDraggable({
    id,
    data: {
      id,
      columnId,
    },
  });

  const buttonStyles = {
    fontSize: '0.875rem',
    padding: '6px 8px',
    gap: '5px',
  }

  const style = {
    transform: CSS.Translate.toString(transform)
  }

  return (
      <div className={cl.kanbanCard}
           {...listeners}
           {...attributes}
           ref={setNodeRef}
           style={style}
      >
        <div className={cl.tags}>{tags?.map(tag => <Tag name={tag.tag.name} color={tag.tag.color_code}/>)}</div>
        <div className={cl.name}><HiDocumentDuplicate/><h2>{name}</h2></div>
        <div className={cl.users}>
          {users.map(user =>
              <Button
                  textColor="rgba(157, 155, 161, 1)"
                  bgColor="rgba(233, 232, 236, 1)"
                  style={buttonStyles}>
                @ {user.username}
              </Button>)}
        </div>
      </div>
  )
}

export default KanbanCard
