import {createSlice, PayloadAction, createAction} from "@reduxjs/toolkit";
import {RootState} from '../../index.ts'
import {
  GetProjectColumnsSuccessPayload,
  GetProjectsSuccessPayload,
  ProjectsState
} from '../../types/project.ts'
import {IColumn, IProject} from '../../../models/IProject.ts'

const initialState: ProjectsState =  {
  pending: false,
  projects: [],
  columns: []
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    getProjects: (state) => {
      state.pending = true
    },
    getProjectsSuccess: (state, action: PayloadAction<GetProjectsSuccessPayload> ) => {
      state.pending = false
      state.projects = action.payload.results
    },
    getProjectColumns: (state) => {
      state.pending = true
    },
    getProjectColumnsSuccess: (state, action: PayloadAction<GetProjectColumnsSuccessPayload> ) => {
      state.pending = false
      state.columns = action.payload.results
    },
  },
  extraReducers: {

  }
})

export const getProjects = createAction('project/getProjects')
export const getProjectsSuccess = createAction<GetProjectsSuccessPayload>('project/getProjectsSuccess')
export const getProjectColumns = createAction<string>('project/getProjectColumns')
export const getProjectColumnsSuccess = createAction<GetProjectColumnsSuccessPayload>('project/getProjectColumnsSuccess')
export const projectsSelector = ((state: RootState): IProject[] | null => state.project.projects)
export const projectsPendingSelector = ((state: RootState): boolean => state.project.pending)
export const projectColumnsSelector = ((state: RootState): IColumn[] => state.project.columns)

export default projectSlice.reducer
