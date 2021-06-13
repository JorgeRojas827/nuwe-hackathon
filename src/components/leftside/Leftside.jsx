import React from 'react';
import Background from '../../assets/Background.png';
import Quote from '../../assets/quote.png'
import Decoration from '../../assets/decoration.png'

export const Leftside = () => {
    return (
        <div className = "h-screen w-5/12 relative hidden md:flex">
            <figure>
                <img className = "h-screen absolute w-full" src= { Background } alt="buildImage" />
                <div className="bg-primary z-10 opacity-90 absolute h-screen w-full"></div>
            </figure>
            <figure>
                <img className = "z-20 absolute left-20 top-56" src= { Quote } alt="single quote" />
            </figure>
            <div className="z-20 absolute w-full h-full flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <p className="lg:text-base text-white text-xs lg:leading-8 leading-6 tracking-widest font-light font-inter">
                        Nuwe es la plataforma que convierte el desarrollo <br />
                        profesional, la búsqueda de trabajo y las conexiones <br />
                        de personas y empresas en un juego. Haciendo <br />
                        que puedas centrarte en lo que te gusta, <br />
                        programar, diseñar, crear, planear...
                    </p>
                </div>
            </div>
            <figure>
                <img className = "z-20 absolute bottom-60 right-32" src= { Decoration } alt="decoration" />
            </figure>
        </div>
    );
};
