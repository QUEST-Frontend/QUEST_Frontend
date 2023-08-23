import { call, put, takeLeading } from 'redux-saga/effects';
import {AuthActionTypes, LoginAction, LoginTokenAction} from '../../types/auth.ts'
import { loginFailure, loginSuccess } from './authSlice.ts';
import { loginUser as loginUserApi, loginTokenUser as loginTokenUserApi } from '../../../api/auth'
import {AxiosError} from 'axios'

// fetchPosts worker
export function* loginSaga(action: LoginAction) {
  try {
    const { data } = yield call(loginUserApi, action.payload)
    yield put(loginSuccess({ user: data.user_data, accessToken: data.user_data.access, refreshToken: data.user_data.refresh }));
    localStorage.setItem("accessToken", data.user_data.access)
    localStorage.setItem("refreshToken", data.user_data.refresh)
  } catch (err: AxiosError | undefined | any) {
      console.log(err)
      yield put(loginFailure({ error: err.response.data.details }));
    }
}

export function* loginTokenSaga(action: LoginTokenAction) {
  try{
    const { data } = yield call(loginTokenUserApi, action.payload)
    yield put(loginSuccess({ user: data.user_data, accessToken: data.user_data.access, refreshToken: data.user_data.refresh }));
  }catch (err){
    if (err instanceof AxiosError) {
      yield put(loginFailure({ error: err.message }));
    }
  }
}

// post watcher
function* authSaga() {
  yield takeLeading(AuthActionTypes.LOGIN, loginSaga); // Use loginSaga directly
  yield takeLeading(AuthActionTypes.LOGIN_TOKEN, loginTokenSaga); // Use loginSaga directly
}

export default authSaga;
