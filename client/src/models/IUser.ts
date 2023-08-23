export interface IUser{
    user: IUserCredentials
    first_name: string
    last_name: string
    patronymic: string
    gender: string
    birth_date: string
    position: IPosition
    department: isDepartment
    access: string
    refresh: string
}

interface IUserCredentials{
    id: number
    username: string
    email: string
    profile_image: string
}

interface IPosition {
    code: string
    is_director: boolean
}

interface isDepartment {
    id: number
    name: string
    company: ICompany
}

interface ICompany{
    name: string
    description: string
    email: string
    contact_phone: number
    address: string
}
