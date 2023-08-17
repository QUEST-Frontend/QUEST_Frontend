import React, {useState} from 'react';
import authFormStyle from "./scss/authForm.module.scss";

function TextInput({inIcon, inPlaceholder, register, error, name, isDirty, regex}) {
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
        <div className={authFormStyle.inputBlock}
             style={isDirty ? (error ? {borderBottom: '0.1vh solid red'}
                 : {borderBottom: '0.1vh solid green'}) : {}}>
            <div>
                <InIcon className={authFormStyle.inputIcon} style={isDirty ?
                    (error ? {fill: 'red'} : {fill: 'green'}) : {}}/>
            </div>
            <div>
                <input type='text' className={authFormStyle.textInput}
                       placeholder={inPlaceholder}
                       {...register(name, {
                           required: {
                               value: true,
                               message: `Empty ${name} Field`
                           },
                           pattern: {
                               value: regex
                           }
                       })}
                       style={isDirty ? (error ? {color: 'red'} : {color: 'green'}) : {}}
                />
            </div>
        </div>
    );
}

export default TextInput;