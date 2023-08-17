import axios, { AxiosResponse } from 'axios';
import { call, put, takeLeading } from 'redux-saga/effects';
import { IUser } from '../../../models/IUser.ts';
import {AuthActionTypes, LoginAction, LoginResponse, LoginTokenAction} from '../../types/auth.ts'
import { loginFailure, loginSuccess } from './authSlice.ts';

const BASE_URL = process.env.BACKEND_URL

// fetchPosts worker
export function* loginSaga(action: LoginAction) {
  try {
    const { data }: AxiosResponse<LoginResponse> = yield call(() =>
        axios.post<IUser>(`${BASE_URL}api/v1/login_by_email/`, {
          username: action.payload.username,
          password: action.payload.password
        })
    );
    yield put(loginSuccess({ user: data.user_data, token: data.user_data.access }));
    localStorage.setItem("accessToken", data.user_data.access)
  } catch (err) {
    if (err instanceof Error) {
      yield put(loginFailure({ error: err.message }));
    }
  }
}

export function* loginTokenSaga(action: LoginTokenAction) {
  try{
    const { data }: AxiosResponse<LoginResponse> = yield call(() =>
        axios.post<IUser>(`${BASE_URL}api/v1/login_by_email/`, {
          "access_token": action.payload.token
        })
    );
    yield put(loginSuccess({ user: data.user_data, token: data.user_data.access }));
  }catch (err){
    if (err instanceof Error) {
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
