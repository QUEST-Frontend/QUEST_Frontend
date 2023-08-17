import {all} from "redux-saga/effects"
import authSaga from './features/auth/authSaga.ts'

export function* rootSaga(){
  yield all([authSaga()]);
}
