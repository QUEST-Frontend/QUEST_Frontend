import {type ComponentType, lazy, Suspense} from 'react'
import Loading from 'components/UI/loading/Loading.jsx'
import {RouteObject} from 'react-router-dom'
import AuthPageGuard from 'components/guards/AuthPageGuard.tsx'
import {GuestGuard} from 'components/guards/GuestGuard.tsx'

const Loadable = (Component: ComponentType) => (props: any) => (
    <Suspense fallback={<Loading loading={true}/>}>
      <Component {...props} />
    </Suspense>
)

const AuthPage = Loadable(lazy(async() => await import('./pages/auth/AuthPage')))
const ProjectsPage = Loadable(lazy(async() => await import('./pages/projects/ProjectsPage.jsx')))
const NotFoundPage = Loadable(lazy(async() => await import('./pages/notFound/NotFound404.jsx')))

export const router: RouteObject[] = [
  {
    path: 'projects',
    element: (
      <AuthPageGuard>
        <ProjectsPage/>
      </AuthPageGuard>
    )
  },
  {
    path: 'login',
    element: (
        <GuestGuard>
          <AuthPage/>
        </GuestGuard>
    )
  },
  {
    path: 'register',
    element: (
        <GuestGuard>
          <AuthPage/>
        </GuestGuard>
    )
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]
