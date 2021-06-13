import React, { useContext } from 'react'
import { Button } from '../Button'
import { FormInput } from '../FormInput'
import { StepContext } from '../../../context/StepContext'
import '../../Root.css'

export const ThirdStep = () => {

    const [step, setStep] = useContext(StepContext)

    const handleClick = (e) => {
        e.preventDefault();
    }

    const returnStep = () => {
        setStep({currentStep: "2"})
    }

    return (
        <>
            <div className="cursor-pointer ml-10 absolute left-0 top-10 text-gray-400" onClick = { () => returnStep() }>
                <i className = "fas fa-chevron-left mr-3"></i>
                <span className = "font-semibold">Volver</span>
            </div>
            <div id="top" className = "absolute right-10 md:right-20 top-5 md:top-10 text-right">
                <p className = "text-gray-400 font-semibold text-sm uppercase">Step 0{ step.currentStep }/03 <br /> <span className = "normal-case text-base text-gray-500">Verificación por tarjeta</span></p>
            </div>
            <div id="main" className = "h-full w-full flex flex-col justify-center items-center mr-20 ">
                <div id="content" className = "pb-3 border-b border-gray-100">
                    <h1 className = "lg:text-3xl text-2xl font-bold">Verifica tu perfil</h1>
                    <p className="text-gray-400 mt-2 text-sm w-80 sm:w-96">
                    Para poder revisar que se trata de una cuenta real, <br /> necesitamos la siguiente información
                    </p>
                </div>
                <hr />
                <div id="form" className = "pt-3">
                    <form className = "flex flex-col">
                        <FormInput
                            type = "text"
                            label = "Número de tarjeta"
                            placeholder = "Ingrese su número de tarjeta"
                        />
                        <FormInput
                            type = "text"
                            label = "Código secreto"
                            placeholder = "Introduzca su código secreto"
                        />
                        <Button 
                            buttonText = "Crear cuenta"
                            backgroundColor = "#4F934A"
                            textColor = "white"
                            onClick = { handleClick }
                        />
                    </form>
                    <div id="info" className="text-gray-400 flex justify-center items-center mt-5">
                        <i className = "fas fa-lock opacity-50 fa-sm mr-3"></i>
                        <p className = "text-xs">Tu información es segura</p>
                    </div>
                </div>
            </div>
        </>
    )
}

