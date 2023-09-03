import {AxiosResponse} from 'axios'
import {apiWithAuthAndErrorMessaging} from './api.ts'
import {GetProjectsResponse} from '../store/types/project.ts'

export const getProjects = async (): Promise<AxiosResponse<GetProjectsResponse>> => {
  return await apiWithAuthAndErrorMessaging.get(
      '/projects/project/',
  )
}

export const getProjectColumns = async (id: string): Promise<AxiosResponse<GetProjectsResponse>> => {
  console.log(id)
  return await apiWithAuthAndErrorMessaging.get(
      '/tasks/column/', {
        params: { project: id }
      }
  )
}
