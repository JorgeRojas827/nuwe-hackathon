import React, { useState } from 'react';
import '../Root.css'

export const FormInput = ({ type, label, placeholder, show, value, onChange, style }) => {
    
    const [typeForm, setTypeForm] = useState(type);

    const showPassword = () => {
        if (typeForm === "password") {
            setTypeForm("text")
        } else {
            setTypeForm("password")
        }
    }

    return (
        <div className = "mb-5 flex flex-col relative">
            <label className = "text-gray-400 font-semibold text-sm mb-2">{ label }</label>
            <input autoComplete = "off" 
                className = "input sm:w-96 w-80 border border-gray-400 rounded-md px-6 py-3" 
                type= { typeForm }
                value = { value }
                onChange = { onChange }
                style = { style }
                placeholder = { placeholder } required />
                {
                    show 
                        ? <p className = "cursor-pointer right-8 top-11 absolute text-xs" 
                             onClick = { showPassword }>Mostrar</p> 
                        : null
                }
        </div>
    )
}
