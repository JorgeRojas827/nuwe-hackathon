import React from 'react';
import '../Root.css'

export const FormInput = ({ type, label, placeholder }) => {
    return (
        <div className = "mb-5 flex flex-col">
            <label className = "text-gray-400 font-semibold text-sm mb-2">{ label }</label>
            <input autoComplete = "off" className = "input sm:w-96 w-80 border border-gray-400 rounded-md px-6 py-3" type= { type } placeholder = { placeholder } />
        </div>
    )
}
