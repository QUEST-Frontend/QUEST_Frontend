import 'react-toastify/dist/ReactToastify.css';
import cl from './App.module.scss'
import {useRoutes} from 'react-router-dom'
import {useEffect} from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Loading from "components/UI/loading/Loading";

import Notes from "components/notes/Notes.jsx";
import {
  authErrorSelector,
  authPendingSelector,
  authUserSelector, loginToken
} from './store/features/auth/authSlice.ts'
import {useDispatch, useSelector} from 'react-redux'
import { router } from './routes'
import {toast, ToastContainer} from 'react-toastify'


export default function App() {
  const dispatch = useDispatch()
  const content = useRoutes(router)
  const user = useSelector(authUserSelector)
  const error = useSelector(authErrorSelector)
  const pending = useSelector(authPendingSelector)
  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    if(accessToken){
      dispatch(loginToken({accessToken}))
    }
  }, [accessToken])

  useEffect(() => {
    if(error){
      toast.error(error)
    }
  }, [user, error])
  return (
      <>
        <ToastContainer />
        <div className={cl.mainContainer}>
          {user && <Sidebar/>}
          { content }
          {user && <Notes/>}
        </div>
        <Loading loading={pending} />
      </>
  )
}
