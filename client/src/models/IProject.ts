import {IDepartment} from './IDepartment.ts'
import {ITag} from './ITag.ts'

export interface IProject {
  id: number
  name: string
  description: string
  start_date: string
  end_date: string
  deadline: string
  status: string
  department: IDepartment
  project_tags: ITag[]
  logo: string
  mini_header: string
  header: string
}

export interface IUserProjectsRequest {
    token: string
}
