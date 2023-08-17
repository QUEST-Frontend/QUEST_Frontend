import {configureStore, MiddlewareArray} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import authReducer from "./features/auth/authSlice.ts"
import {rootSaga} from "./rootSaga.ts";

const sagaMiddleware = createSagaMiddleware()
const middleware = new MiddlewareArray(sagaMiddleware)
export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  devTools: true,
  middleware
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store
