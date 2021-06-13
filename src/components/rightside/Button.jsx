import React from 'react';
import '../Root.css'

export const Button = ({ buttonText, backgroundColor, textColor }) => {

    const handleClick = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className="flex flex-col">
                <button style = {{
                    backgroundColor: backgroundColor,
                    color: textColor
                }} className = "btn w-96 py-3 rounded-md" onClick = { handleClick }>{ buttonText }</button>    
            </div>   
        </>
    );
};
