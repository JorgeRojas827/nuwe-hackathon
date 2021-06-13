import React from 'react';
import '../Root.css'

export const FormInput = ({ type, label, placeholder }) => {
    return (
        <div className = "mb-5 flex flex-col">
            <label className = "text-gray-700 mb-2">{ label }</label>
            <input autoComplete = "off" className = "input w-96 border border-gray-400 rounded-md px-6 py-3" type= { type } placeholder = { placeholder } />
        </div>
    )
}
