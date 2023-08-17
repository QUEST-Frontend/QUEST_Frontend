import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom"
import {loginUser} from "../../reduxTK/features/auth/authActions.js";
import isObjEmpty from "../../utilities/isObjEmpty.js";
import {useNotification} from "../../hooks/useNotification.js";
import {ReactNotifications} from "react-notifications-component";
import Loading from "../../components/UI/loading/Loading.jsx";

function TestLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userInfo, error, success } = useSelector(
        (state) => state.auth
    )
    const { register, handleSubmit } = useForm()

    useEffect(() => {
        if(error){
            useNotification("danger", "Authorization", error)
        }
    }, [navigate, userInfo, success, error])

    function submitForm(data){
        console.log(data)
        dispatch(loginUser(data))
    }

    return (
       <div>
           <form onSubmit={handleSubmit(submitForm)}>
               <input
                   type="text"
                   placeholder={"Username"}
                   {...register('username')}
                   required={true}
               />
               <br/>
               <input
                   type="password"
                   placeholder={"Password"}
                   {...register('password')}
                   required={true}
               />
               <br/>
               <button>Sign in</button>
           </form>
       </div>
    );
}

export default TestLogin;
