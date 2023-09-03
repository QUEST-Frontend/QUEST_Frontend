import {ITask} from './models/ITask.ts'

export interface IKanbanColumn {
  id: string | number
  title: string
  headerColor: string
}

export interface IKanbanTask extends ITask{
  columnId: number | string
}
