import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';
import cl from './App.module.scss'
import {BrowserRouter, Route, Routes, Navigate, useRoutes} from 'react-router-dom'
import {ReactNotifications} from "react-notifications-component";
import {useEffect} from "react";
import AuthPage from "./pages/auth/AuthPage.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import NotFound404 from "./pages/notFound/NotFound404.jsx";
import {useNotification} from "./hooks/useNotification.js";
import Loading from "components/UI/loading/Loading.jsx";
import NotAuth from "./pages/notAuth/NotAuth.jsx";
import ProjectsPage from "./pages/projects/ProjectsPage.jsx";
import Notes from "components/notes/Notes.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Kanban from "./components/Kanban/Kanban.jsx"
import {
  authErrorSelector,
  authPendingSelector,
  authUserSelector, loginToken
} from './store/features/auth/authSlice.ts'
import {useDispatch, useSelector} from 'react-redux'
import { router } from './routes'


export default function App() {
  const dispatch = useDispatch()
  const content = useRoutes(router)
  const user = useSelector(authUserSelector)
  const error = useSelector(authErrorSelector)
  const pending = useSelector(authPendingSelector)
  const token = localStorage.getItem('accessToken')

  useEffect(() => {
    if(token){
      dispatch(loginToken({token}))
    }
  }, [token])

  useEffect(() => {
    if(error){
      useNotification("danger", "Authorization", error)
    }
  }, [user, error])
  return (
      <>
        <ReactNotifications />
        <div className={cl.mainContainer}>
          {user && <Sidebar/>}
          { content }
          {user && <Notes/>}
        </div>
        <Loading loading={pending} />
      </>
  )
}
