import React from 'react';
import '../Root.css'

export const Button = ({ buttonText, icon, backgroundColor, textColor, boxShadow, onClick }) => {

    return (
        <>
            <div className="flex flex-col relative">
                { icon 
                    ? <figure>
                        <img className = "absolute mt-3 ml-8" src= { icon } alt="iconGoogle" />
                    </figure> : null
                }
                <input type = "submit" style = {{
                    backgroundColor,
                    color: textColor,
                    boxShadow
                }} className = "btn sm:w-96 w-80 h-12 cursor-pointer py-3 rounded-md text-sm font-semibold" value = { buttonText } onClick = { onClick } /> 
            </div>   
        </>
    );
};
