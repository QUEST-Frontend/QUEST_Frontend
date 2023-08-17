import React, {useState} from 'react';
import authFormStyle from "./scss/authForm.module.scss";
import {IoEye, IoEyeOff} from "react-icons/io5";

function PassInput({inIcon, inPlaceholder, register, error, name, isDirty, validation}) {
    let [passStatus, setPassStatus] = useState({hidden: true, type: 'password'})
    // let inputChanged = (element) =>{
    //     props.inChange(element.value)
    //     if (props.validation.test(element.value)){
    //         element.style = 'color:green'
    //         props.setValidForm(true)
    //     }else{
    //         element.style = 'color:red'
    //         props.setValidForm(false)
    //     }
    // }
    let InIcon = inIcon
    return (
        <div className={authFormStyle.passInputBlock}
             style={isDirty ? (error ? {borderBottom: '0.1vh solid red'}
                 : {borderBottom: '0.1vh solid green'}):{}}
        >
            <div>
                {<InIcon className={authFormStyle.inputIcon} style={isDirty ? (error ? {fill:'red'} : {fill: 'green'}):{}}/>}
            </div>
            <div>
                <input type={passStatus.type} className={authFormStyle.textInput}
                       placeholder={inPlaceholder}
                       {...register(name,  {
                           ...validation
                       })}
                       style={isDirty ? (error ? {color:'red'} : {color:'green'}):{}}
                />
            </div>
            <div>
                {
                    passStatus.hidden ? <IoEyeOff className={authFormStyle.hiderIcon}
                                                  onClick={() => setPassStatus({hidden: false, type: 'text'})}
                                                  style={isDirty ? (error ? {fill:'red'} : {fill: 'green'}):{}}
                        /> :
                        <IoEye className={authFormStyle.hiderIcon}
                               onClick={() => setPassStatus({hidden: true, type: 'password'})}
                               style={isDirty ? (error ? {fill:'red'} : {fill: 'green'}):{}}
                        />

                }
            </div>
        </div>
    );
}

export default PassInput;