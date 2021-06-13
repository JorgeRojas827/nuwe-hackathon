import React, { useContext } from 'react'
import { Button } from '../Button'
import { FormInput } from '../FormInput'
import '../../Root.css'
import { StepContext } from '../../../context/StepContext'

export const FirstStep = () => {

    const [step, setStep] = useContext(StepContext)

    const handleClick = () => {
        setStep({currentStep: "2"})
        console.log(step)
    }

    const returnStep = () => {
        setStep({currentStep: "0"})
    }

    return (
        <>
            <div className="cursor-pointer absolute left-0 top-10" onClick = { () => returnStep() }>
                <i className = "fas fa-arrow-left"></i>
                <span>Volver</span>
            </div>
            <div id="top" className = "absolute bottom-32 right-20 lg:right-20 md:right-20 lg:top-10 md:top-10">
                <p className = "text-gray-400 font-semibold uppercase">Paso 01/03 <br /> <span className = "normal-case text-gray-500">Personal Info.</span></p>
            </div>
            <div id="main" className = "h-full w-full flex flex-col justify-center items-center mr-40">
                <div id="content" className = "pb-3 border-b">
                    <h1 className = "lg:text-3xl text-2xl font-bold">Registra tu cuenta individual</h1>
                    <p className="text-gray-400 mt-2">
                    Para poder revisar que se trata de una cuenta real, <br /> necesitamos la siguiente información
                    </p>
                </div>
                <hr />
                <div id="form" className = "pt-3">
                    <form className = "flex flex-col">
                        <FormInput
                            type = "text"
                            label = "Nombre completo*"
                            placeholder = "Enter email adress"
                        />
                        <FormInput
                            type = "email"
                            label = "Correo Electrónico*"
                            placeholder = "Enter email adress"
                        />
                        <FormInput
                            type = "password"
                            label = "Contraseña*"
                            placeholder = "Enter email adress"
                        />
                        <div id="checkbox" className = "inline-flex mb-10">
                            <input type="checkbox" name="terms" className = "checkbox"/>
                            <label>Acepto los términos y condiciones</label>
                            <span className="checkmark"></span>
                        </div>
                        <Button 
                            buttonText = "Registrar cuenta" 
                            backgroundColor = "#4F934A"
                            textColor = 'white'
                        />
                    </form>
                </div>
            </div>
        </>
    )
}
