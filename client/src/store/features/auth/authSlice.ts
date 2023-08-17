import {createSlice, PayloadAction, createAction} from "@reduxjs/toolkit";
import {AuthState, LoginFailurePayload, LoginPayload, LoginSuccessPayload, LoginTokenPayload} from '../../types/auth.ts'
import {RootState} from '../../index.ts'
import {IUser} from '../../../models/IUser.ts'

const initialState: AuthState =  {
  pending: false,
  error: null,
  user: null,
  token: "",
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
      state.token = action.payload.token
      state.isAuthenticated = true
    },
    loginFailure: (state, action: PayloadAction<LoginFailurePayload>) => {
      state.pending = false;
      state.error = action.payload.error
    },
    loginToken: (state) => {
      state.pending = true;
    },
  },
  extraReducers: {

  }
})

export const login = createAction<LoginPayload>('auth/login')
export const loginSuccess = createAction<LoginSuccessPayload>('auth/loginSuccess')
export const loginFailure = createAction<LoginFailurePayload>('auth/loginFailure')
export const loginToken = createAction<LoginTokenPayload>('auth/loginToken')

export const authUserSelector = ((state: RootState): IUser | null => state.auth.user)
export const authPendingSelector = ((state: RootState): boolean => state.auth.pending)
export const authErrorSelector = ((state: RootState): string | null => state.auth.error)
export const authTokenSelector = ((state: RootState): string => state.auth.token)
export const isAuthenticatedSelector = ((state: RootState): boolean => state.auth.isAuthenticated)

export default authSlice.reducer
