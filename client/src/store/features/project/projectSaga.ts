import {call, put, takeLeading} from 'redux-saga/effects'
import {getProjectsSuccess} from './projectSlice.ts'
import {getProjects as getProjectsApi} from '../../../api/project.ts'
import {GetProjectsResponse, ProjectActionTypes} from '../../types/project.ts'
import {AxiosResponse} from 'axios'

export function* getProjects() {
  try {
    // @ts-ignore TODO
    const response: AxiosResponse<GetProjectsResponse> = yield call(getProjectsApi)
    if(response.data){
      yield put(getProjectsSuccess(response.data));
    }
  } catch {}
}

export function* projectSaga(){
  yield takeLeading(ProjectActionTypes.GET_PROJECTS, getProjects)
}
