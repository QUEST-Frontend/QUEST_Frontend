import {configureStore, MiddlewareArray} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import authReducer from "./features/auth/authSlice.ts"
import projectReducer from "./features/project/projectSlice.ts"
import taskReducer from "./features/task/taskSlice.ts"
import noteReducer from "./features/notes/notesSlice.ts"
import {rootSaga} from "./rootSaga.ts";

const sagaMiddleware = createSagaMiddleware()
const middleware = new MiddlewareArray(sagaMiddleware)
export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
    task: taskReducer,
    note: noteReducer
  },
  devTools: true,
  middleware
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store
