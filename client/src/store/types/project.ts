import {IProject} from '../../models/IProject.ts'

export enum ProjectActionTypes {
  GET_PROJECTS = "project/getProjects"
}

export interface ProjectsState {
  projects: IProject[]
  pending: boolean
}

export interface GetProjectsResponse{
  next: boolean
  previous: boolean
  count: number
  pageCount: number
  results: IProject[]
}

export interface GetProjectsSuccessPayload {
  next: boolean
  previous: boolean
  count: number
  pageCount: number
  results: IProject[]
}


export interface GetProjectsAction {
  type: ProjectActionTypes.GET_PROJECTS,
}
