import {IUser} from '../../models/IUser.ts'

export interface AuthState {
  pending: boolean
  user: IUser | null
  error: string | null
  token: string
  isAuthenticated: boolean
}

export interface LoginResponse{
  user_data: IUser
}

export enum AuthActionTypes {
  LOGIN = "auth/login",
  LOGIN_SUCCESS = "auth/loginSuccess",
  LOGIN_FAILURE = "auth/loginFailure",
  LOGIN_TOKEN = "auth/loginToken"
}

export interface LoginPayload {
  username: string
  password: string
}

export interface LoginSuccessPayload {
  user: IUser
  token: string
}

export interface LoginFailurePayload {
  error: string
}

export interface LoginAction {
  type: AuthActionTypes.LOGIN,
  payload: LoginPayload
}

export interface LoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: LoginSuccessPayload
}

export interface LoginFailureAction {
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: LoginFailurePayload
}

export interface LoginTokenPayload {
  token: string | null
}

export interface LoginTokenAction {
  type: AuthActionTypes.LOGIN_TOKEN,
  payload: LoginTokenPayload
}

