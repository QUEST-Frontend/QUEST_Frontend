import type { FC, PropsWithChildren } from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {isAuthenticatedSelector} from '../../store/features/auth/authSlice.ts'

export const GuestGuard: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate()
  const isAuthenticated = useSelector(isAuthenticatedSelector)

  if (isAuthenticated) {
    navigate('/projects')
  }

  return <>{children}</>
}
