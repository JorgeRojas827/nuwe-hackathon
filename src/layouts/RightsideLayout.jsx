import React from 'react'

export const RightsideLayout = ({ top, title, description, children }) => {
    return (
        <>
            <div id="top" className = "absolute bottom-32 right-20 lg:right-20 md:right-20 lg:top-10 md:top-10">
                <p className = "text-gray-400 font-semibold">Ya tienes cuenta? <span className = "text-primary cursor-pointer hover:border-2">Inicia sesión</span></p>
            </div>
            <div id="main" className = "h-full w-full flex flex-col justify-center items-center mr-40 pb-20">
                <div id="content" className = "mb-8">
                    <h1 className = "lg:text-3xl text-2xl font-bold">{ title }</h1>
                    <p className="text-gray-400 mt-2">
                        { description }
                    </p>
                </div>
                <br />
                { children }
            </div>
        </>
    )
}
