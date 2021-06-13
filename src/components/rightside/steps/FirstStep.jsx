import React, { useContext } from 'react'
import { Button } from '../Button'
import { FormInput } from '../FormInput'
import { StepContext } from '../../../context/StepContext'
import iconGoogle from '../../../assets/iconGoogle.png'
import '../../Root.css'

export const FirstStep = () => {

    const [step, setStep] = useContext(StepContext)

    const handleClick = (e) => {
        e.preventDefault();
        setStep({currentStep: "2"})
    }

    const returnStep = () => {
        setStep({currentStep: "0"})
    }

    return (
        <>
            <div className="cursor-pointer ml-10 absolute left-0 top-8 md:top-10 text-gray-400" onClick = { () => returnStep() }>
                <i className = "fas fa-chevron-left mr-3"></i>
                <span className = "font-semibold">Volver</span>
            </div>
            <div id="top" className = "absolute right-10 md:right-20 top-5 md:top-10 text-right">
                <p className = "text-gray-400 font-semibold text-sm uppercase">Paso 0{ step.currentStep }/03 <br /> <span className = "normal-case text-base text-gray-500">Personal Info.</span></p>
            </div>
            <div id="main" className = "h-full w-full flex flex-col justify-center items-center sm:mt-0 mt-5 mr-20 ">
                <div id="content" className = "pb-3 border-b border-gray-100">
                    <h1 className = "lg:text-3xl md:text-2xl text-xl font-bold sm:w-98 w-80">Registra tu cuenta individual</h1>
                    <p className="text-gray-400 mt-2 hidden md:flex">
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
                        <label className="relative inline-flex mb-2 text-xs text-gray-500 font-semibold" id="check">
                            <p className = "ml-6 mb-2">Acepto los términos y condiciones</p>
                            <input type="checkbox" name="terms" id = "check" className = "checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <Button 
                            buttonText = "Registrar cuenta"
                            backgroundColor = "#4F934A"
                            textColor = "white"
                            onClick = { handleClick }
                        />
                        <h4 className = "my-5"><span>o</span></h4>
                        <Button 
                            buttonText = "Regístrate con Google"
                            icon = { iconGoogle }
                            backgroundColor = "white"
                            textColor = "black"
                            boxShadow = "0px 2px 7px 1px rgba(0,0,0,0.06)"
                            onClick = { handleClick }
                        />
                    </form>
                </div>
            </div>
        </>
    )
}
