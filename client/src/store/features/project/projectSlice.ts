import {createSlice, PayloadAction, createAction} from "@reduxjs/toolkit";
import {RootState} from '../../index.ts'
import {GetProjectsSuccessPayload, ProjectsState} from '../../types/project.ts'
import {IProject} from '../../../models/IProject.ts'

const initialState: ProjectsState =  {
  pending: false,
  projects: []
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
  },
  extraReducers: {

  }
})

export const getProjects = createAction('project/getProjects')
export const getProjectsSuccess = createAction<GetProjectsSuccessPayload>('project/getProjectsSuccess')

export const projectsSelector = ((state: RootState): IProject[] | null => state.project.projects)
export const projectsPendingSelector = ((state: RootState): boolean => state.project.pending)

export default projectSlice.reducer
