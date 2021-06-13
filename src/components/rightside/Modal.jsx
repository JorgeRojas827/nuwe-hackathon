import React from 'react'

export const Modal = ({ title, content, buttonText, secButtonText, closeModal }) => {

    return (
        <>
            <div className = "w-screen h-screen bg-transparent z-40 flex justify-center items-center absolute left-0 top-0">
                <div className="sm:w-100 w-72 sm:h-56 h-64 p-5 flex flex-col z-50 rounded-xl opacity-100 bg-white">
                    <h1 className = "font-bold mt-3 text-lg">{ title }</h1>
                    <p className = "mt-5 text-sm">{ content }</p>
                    <div className="flex sm:mt-0 mt-12">
                        <button onClick = { closeModal } className = "input sm:w-32 w-20 sm:h-12 h-10 sm:ml-5 ml-3 sm:mt-7 mt-1 rounded border border-black font-bold">{ buttonText }</button>
                        {
                            secButtonText 
                            ? <a href="https://nuwe.io/" rel = "noreferrer" target = "_blank"><button className = "input sm:w-60 w-32 sm:h-12 h-10 ml-2 sm:mt-7 mt-1 sm:text-sm text-xs text-white rounded bg-black font-bold">{ secButtonText }</button></a>
                            : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
