import {all} from "redux-saga/effects"
import authSaga from './features/auth/authSaga.ts'
import {projectSaga} from './features/project/projectSaga.ts'
import {taskSaga} from './features/task/taskSaga.ts'

export function* rootSaga(){
  yield all([authSaga(), projectSaga(), taskSaga()]);
}
