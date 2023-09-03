export interface IPerson {
  id: number
  username: string
  email: string
  person: [
    {
      id: 2,
      created_at: string
      updated_at: string
      is_deleted: boolean
      deleted_at: string | null
      last_name: string
      first_name: string
      patronymic: string
      gender: string
      email: string
      birth_date: string | null
      activate_token: string
      xp: number
      level: number
      created_by_user: string | null
      updated_by_user: string | null
      deleted_by_user: string | null
      user: number
      position: number
      department: number
    }
  ]
}
