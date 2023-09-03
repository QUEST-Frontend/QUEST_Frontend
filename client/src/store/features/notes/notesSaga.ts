import { call, put, takeLeading } from 'redux-saga/effects';
import { getNotes as getNotesApi } from '../../../api/notes'
import {getNotesSuccess} from './notesSlice.ts'
import {NotesActionTypes} from '../../types/note.ts'

export function* getNotesSaga() {
  try {
    const { data } = yield call(getNotesApi)
    yield put(getNotesSuccess(data));
  } catch {}
}

function* notesSaga() {
  yield takeLeading(NotesActionTypes.GET_NOTES, getNotesSaga); // Use loginSaga directly
}

export default notesSaga;
