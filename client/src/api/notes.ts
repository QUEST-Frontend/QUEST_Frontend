import {AxiosResponse} from 'axios'
import {apiWithAuthAndErrorMessaging} from './api.ts'
import {GetNotesSuccessPayload} from '../store/types/note.ts'

export const getNotes = async (): Promise<AxiosResponse<GetNotesSuccessPayload>> => {
  return await apiWithAuthAndErrorMessaging.get(
      '/utils/person_notes/'
  )
}
