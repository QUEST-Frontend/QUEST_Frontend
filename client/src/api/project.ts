import {AxiosResponse} from 'axios'
import {apiWithAuthAndErrorMessaging} from './api.ts'
import {GetProjectsResponse} from '../store/types/project.ts'

export const getProjects = async (): Promise<AxiosResponse<GetProjectsResponse>> => {
  return await apiWithAuthAndErrorMessaging.get(
      '/projects/project/',
  )
}
