import React, {useState} from 'react';
import authFormStyle from "./scss/authForm.module.scss";
import TextInput from "./TextInput.jsx";
import {IoKey, IoPersonCircleOutline, IoCreate, IoMail} from "react-icons/io5";
import PassInput from "./PassInput.jsx";
import authStyle from "./scss/auth.module.scss";
import {useForm} from "react-hook-form";

function RegisterForm(props) {
    let {register, handleSubmit,
        formState:{errors, dirtyFields},
        getValues,
        reset} = useForm({mode:'onChange'})

    let passValidation = {
        required: true,
        pattern: /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/
    }
    let rePassValidation = {
        required: true,
        validate: (rePassword) => getValues('password') === rePassword
    }

    let onSubmitToRegistration = (data) => {
        console.log(data)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitToRegistration)}>
            <div className={authFormStyle.container}>
                <div className={authFormStyle.fullNameContainer}>

                    <TextInput inIcon={IoCreate}
                               inPlaceholder={"Имя"} register={register}
                               error={errors.firstName} name='firstName' isDirty={dirtyFields.firstName}
                               regex={/^([А-ЯӘІҢҒҮҰҚӨҺ][а-яёәғқңөұүhі _-]{1,50}|[A-Z][a-z _-]{1,50})$/}
                    />

                    <TextInput inIcon={IoCreate}
                               inPlaceholder={"Фамилия"} register={register}
                               error={errors.lastName} name='lastName' isDirty={dirtyFields.lastName}
                               regex={/^([А-ЯӘІҢҒҮҰҚӨҺ][а-яёәғқңөұүhі _-]{1,50}|[A-Z][a-z _-]{1,50})$/}
                    />
                </div>

                <TextInput inIcon={IoPersonCircleOutline}
                           inPlaceholder={"Имя пользователя"} register={register}
                           error={errors.userName} name='userName' isDirty={dirtyFields.userName}
                           regex={/^([A-Za-z1-9 _-]{2,30})$/}
                />

                <TextInput inIcon={IoMail}
                           inPlaceholder={"Электронная почта"} register={register}
                           error={errors.email} name='email' isDirty={dirtyFields.email}
                           regex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                />

                <PassInput inIcon={IoKey}
                           inPlaceholder={"Пароль"} register={register}
                           error={errors.password} name='password' isDirty={dirtyFields.password}
                           validation={passValidation}
                />

                <PassInput inIcon={IoKey}
                           inPlaceholder={"Повтор пороля"} register={register}
                           error={errors.rePassword} name='rePassword' isDirty={dirtyFields.rePassword}
                           validation={rePassValidation}
                />
            </div>

            <div className={authStyle.submitBlock}>
                <button className={authStyle.submitBtn} disabled={
                    Object.keys(errors).length !== 0 || Object.keys(dirtyFields).length !== 6
                }>Зарегистрироваться</button>
            </div>
            </form>
        </div>
    );
}

export default RegisterForm;