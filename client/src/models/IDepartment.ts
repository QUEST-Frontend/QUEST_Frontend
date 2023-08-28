import {ICompany} from './ICompany.ts'

export interface IDepartment {
    id: number
    name: string
    company: ICompany
}
