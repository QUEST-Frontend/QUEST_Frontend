import {call, put, takeLeading} from 'redux-saga/effects'
import {AxiosResponse} from 'axios'
import {TaskActionTypes, UpdateTaskColumnAction} from '../../types/task.ts'
import {getTasks as getTasksApi, updateTaskColumn as updateTaskColumnApi} from '../../../api/task.ts'
import {getTasksSuccess, updateTaskColumnSuccess} from './taskSlice.ts'
import {ITask} from '../../../models/ITask.ts'

export function* getTasks() {
  try {
    // @ts-ignore TODO
    const response: AxiosResponse<GetTasksResponse> = yield call(getTasksApi)
    if(response.data){
      yield put(getTasksSuccess(response.data));
    }
  } catch {}
}

export function* updateTaskColumn(action: UpdateTaskColumnAction) {
  try {
    const response: AxiosResponse<ITask> = yield call(updateTaskColumnApi, {...action.payload})
    if(response.data){
      yield put(updateTaskColumnSuccess(response.data));
    }
  } catch {}
}

export function* taskSaga(){
  yield takeLeading(TaskActionTypes.GET_TASKS, getTasks)
  yield takeLeading(TaskActionTypes.UPDATE_TASK_COLUMN, updateTaskColumn)
}
