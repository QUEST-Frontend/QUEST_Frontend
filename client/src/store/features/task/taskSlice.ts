import {createSlice, PayloadAction, createAction} from "@reduxjs/toolkit";
import {RootState} from '../../index.ts'
import {ITask} from '../../../models/ITask.ts'
import {GetTasksSuccessPayload, TasksState, UpdateTaskColumnAction} from '../../types/task.ts'

const initialState: TasksState =  {
  pending: false,
  tasks: []
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    getTasks: (state) => {
      state.pending = true
    },
    getTasksSuccess: (state, action: PayloadAction<GetTasksSuccessPayload> ) => {
      state.pending = false
      state.tasks = action.payload.results
    },
    updateTaskColumn: (state) => {
      state.pending = true
    },
    updateTaskColumnSuccess: (state, action: PayloadAction<ITask> ) => {
      state.pending = false
      state.tasks = [...state.tasks.filter(task => task.id !== action.payload.id), action.payload]
    },
  },
  extraReducers: {

  }
})

export const getTasks = createAction('task/getTasks')
export const getTasksSuccess = createAction<GetTasksSuccessPayload>('task/getTasksSuccess')
export const updateTaskColumn = createAction<{taskId: number, columnId: number}>('task/updateTaskColumn')
export const updateTaskColumnSuccess = createAction<ITask>('task/updateTaskColumnSuccess')

export const TasksSelector = ((state: RootState): ITask[] | null => state.task.tasks)
export const TasksPendingSelector = ((state: RootState): boolean => state.task.pending)

export default taskSlice.reducer
