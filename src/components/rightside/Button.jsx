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
                <button style = {{
                    backgroundColor,
                    color: textColor,
                    boxShadow
                }} className = "btn sm:w-96 w-80 h-12 py-3 rounded-md text-sm font-semibold" onClick = { onClick }>{ buttonText }</button>    
            </div>   
        </>
    );
};
