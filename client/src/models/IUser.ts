export interface IUser{
    user: IUserCredentials
    first_name: string
    last_name: string
    patronymic: string
    gender: string
    birth_date: string
    position: string | null
    access: string
    refresh: string
}

interface IUserCredentials{
    id: number
    username: string
    email: string
}
