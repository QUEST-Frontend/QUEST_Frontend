import {call, put, takeLeading} from 'redux-saga/effects'
import {getProjectColumnsSuccess, getProjectsSuccess} from './projectSlice.ts'
import {getProjects as getProjectsApi, getProjectColumns as getProjectColumnsApi} from '../../../api/project.ts'
import {
  GetProjectColumnsAction,
  GetProjectColumnsSuccessPayload,
  GetProjectsResponse,
  ProjectActionTypes
} from '../../types/project.ts'
import {AxiosResponse} from 'axios'

export function* getProjects(): Generator<any, void, AxiosResponse<GetProjectsResponse>> {
  try {
    const response: AxiosResponse<GetProjectsResponse> = yield call(getProjectsApi)
    if(response.data){
      yield put(getProjectsSuccess(response.data));
    }
  } catch {}
}

export function* getProjectColumns(action: GetProjectColumnsAction): Generator<any, void, AxiosResponse<GetProjectColumnsSuccessPayload>> {
  try {
    const response = yield call(getProjectColumnsApi,  action.payload)
    console.log(response)
    if(response.data) {
      yield put(getProjectColumnsSuccess(response.data))
    }
  }
  catch {}
}

export function* projectSaga(){
  yield takeLeading(ProjectActionTypes.GET_PROJECTS, getProjects)
  yield takeLeading(ProjectActionTypes.GET_PROJECT_COLUMNS, getProjectColumns)
}
