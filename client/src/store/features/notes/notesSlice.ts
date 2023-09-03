import {createSlice, PayloadAction, createAction} from "@reduxjs/toolkit";
import {RootState} from '../../index.ts'
import {GetNotesSuccessPayload, NotesState} from '../../types/note.ts'
import {INote} from '../../../types.ts'

const initialState: NotesState =  {
  pending: false,
  notes: []
}

const notesSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    getNotes: (state) => {
      state.pending = true
    },
    getNotesSuccess: (state, action: PayloadAction<GetNotesSuccessPayload> ) => {
      state.pending = false
      state.notes = action.payload.results
    },

  },
  extraReducers: {

  }
})

export const getNotes = createAction('note/getNotes')
export const getNotesSuccess = createAction<GetNotesSuccessPayload>('note/getNotesSuccess')

export const notesSelector = ((state: RootState): INote[] => state.note.notes)
export const notesPendingSelector = ((state: RootState): boolean => state.note.pending)
export default notesSlice.reducer
