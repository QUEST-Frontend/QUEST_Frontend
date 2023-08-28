import {IDepartment} from './IDepartment.ts'
import {IPosition} from './IPosition.ts'

export interface IUser{
    user: IUserCredentials
    first_name: string
    last_name: string
    patronymic: string
    gender: string
    birth_date: string
    position: IPosition
    department: IDepartment
    accessToken: string
    refreshToken: string
}

interface IUserCredentials{
    id: number
    username: string
    email: string
    profile_image: string
}




