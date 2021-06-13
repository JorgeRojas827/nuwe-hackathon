import React from 'react'

export const Card = ({ bkgUrl, iconUrl, title, description, onClick }) => {
    return (
        <div onClick = { onClick } className="card cursor-pointer rounded-xl shadow-default lg:w-96 w-80 px-7 py-4 mb-6 h-24 flex flex-row relative">
            <div id="icon" className = "flex justify-center items-center">
                <figure>
                    <img className = "min-w-full" src= { bkgUrl } alt="iconbkg" />
                </figure>
                <figure className = "absolute">
                    <img className = "min-w-full" src= { iconUrl } alt="icon" />
                </figure>
            </div>
            <div id="content" className = "mx-5">
                <h1 className = "font-bold text-md">{ title }</h1>
                <p className = "text-gray-400 leading-5 text-sm">{ description }</p>
            </div>
            <div className = "arrow top-1/3 absolute right-5">
                <i className="fas fa-arrow-right"></i>
            </div>
        </div>
    )
}
