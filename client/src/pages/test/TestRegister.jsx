import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom"
import {registerUser} from "../../reduxTK/features/auth/authActions.js";
import isObjEmpty from "../../utils/isObjEmpty.js";

function TestRegister() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, userInfo, error, success } = useSelector(
        (state) => state.auth
    )
    const { register, handleSubmit } = useForm()

    useEffect(() => {
        if(success) {
            navigate("/auth")
        }
        if(userInfo){ navigate("/")}
    }, [navigate, userInfo, success])

    function submitForm(data){
        if(data.password !== data.password2){
            alert("Password mismatch")
        }
        else{
            data.email = data.email.toLowerCase()
            console.log(data)
            dispatch(registerUser(data))
        }
    }


    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <input
                type="text"
                placeholder={"First name"}
                {...register('first_name')}
                required={true}
            />
            <br/>
            <input
                type="text"
                placeholder={"Last name"}
                {...register('last_name')}
                required={true}
            />
            <br/>
            <input
                type="text"
                placeholder={"Username"}
                {...register('username')}
                required={true}
            />
            <br/>
            <input
                type="email"
                placeholder={"Email"}
                {...register('email')}
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
            <input
                type="password"
                placeholder={"Confirm password"}
                {...register('password2')}
                required={true}
            />
            <br/>
            <button>Sign up</button>
        </form>
    );
}

export default TestRegister;
