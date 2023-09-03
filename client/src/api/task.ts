import {AxiosResponse} from 'axios'
import {apiWithAuthAndErrorMessaging} from './api.ts'
import {GetTasksResponse} from '../store/types/task.ts'
import {ITask} from '../models/ITask.ts'

export const getTasks = async (): Promise<AxiosResponse<GetTasksResponse>> => {
  return await apiWithAuthAndErrorMessaging.get(
      '/tasks/task/',
  )
}

export const updateTaskColumn = async ({columnId, taskId}: {columnId: number, taskId: number}): Promise<AxiosResponse<ITask>> => {
  return await apiWithAuthAndErrorMessaging.patch(
      `/tasks/task/${taskId}/`,{
        column: columnId
      }
  )
}


