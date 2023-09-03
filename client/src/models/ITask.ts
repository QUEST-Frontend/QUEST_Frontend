import {ITag} from './ITag.ts'
import {IPerson} from './IPerson.tsx'

export interface ITask{
  id: number
  task_tags: ITag[]
  name: string
  description: string
  is_completed: boolean
  start_date: string
  end_date: string
  deadline: string
  status: string
  project: number
  assigned_users: IPerson[]
  column: number
}
