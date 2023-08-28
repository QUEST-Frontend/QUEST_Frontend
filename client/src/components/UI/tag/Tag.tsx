import {FC} from 'react'
import cl from './Tag.module.scss'

interface TagProps{
  name: string
  color: string
  style?: any
}

const Tag: FC<TagProps> = ({name, color, style, ...props}) => {
  return (
      <div className={cl.tag} style={{backgroundColor: `rgba(${color}, 0.3)`, color: `rgba(${color}, 1)`, ...style}} {...props}>{name}</div>
  )
}

export default Tag
