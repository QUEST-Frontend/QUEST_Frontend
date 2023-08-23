import {createSlice, PayloadAction, createAction} from "@reduxjs/toolkit";
import {
  AuthState,
  LoginFailurePayload,
  LoginPayload,
  LoginSuccessPayload,
  LoginTokenPayload,
  TokenPayload
} from '../../types/auth.ts'
import {RootState} from '../../index.ts'
import {IUser} from '../../../models/IUser.ts'

const initialState: AuthState =  {
  pending: false,
  error: null,
  user: null,
  accessToken: "",
  refreshToken: "",
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.pending = true
    },
    loginSuccess: (state, action: PayloadAction<LoginSuccessPayload> ) => {
      state.pending = false
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
      state.isAuthenticated = true
    },
    loginFailure: (state, action: PayloadAction<LoginFailurePayload>) => {
      state.pending = false;
      state.error = action.payload.error
    },
    loginToken: (state) => {
      state.pending = true;
    },
    setToken: (state, action: PayloadAction<TokenPayload>) => {
      if(state.accessToken && state.refreshToken){
        state.accessToken = action.payload.accessToken
        state.refreshToken = action.payload.refreshToken
      }
    }
  },
  extraReducers: {

  }
})

export const login = createAction<LoginPayload>('auth/login')
export const loginSuccess = createAction<LoginSuccessPayload>('auth/loginSuccess')
export const loginFailure = createAction<LoginFailurePayload>('auth/loginFailure')
export const loginToken = createAction<LoginTokenPayload>('auth/loginToken')
export const setToken = createAction<TokenPayload>('auth/setToken')

export const authUserSelector = ((state: RootState): IUser | null => state.auth.user)
export const authPendingSelector = ((state: RootState): boolean => state.auth.pending)
export const authErrorSelector = ((state: RootState): string | null => state.auth.error)
export const authAccessTokenSelector = ((state: RootState): string => state.auth.accessToken)
export const authRefreshTokenSelector = ((state: RootState): string => state.auth.refreshToken)
export const isAuthenticatedSelector = ((state: RootState): boolean => state.auth.isAuthenticated)

export default authSlice.reducer
