import React, { useContext } from 'react'
import { Button } from '../Button'
import { FormInput } from '../FormInput'
import { StepContext } from '../../../context/StepContext'
import '../../Root.css'

export const SecondStep = () => {

    const [step, setStep] = useContext(StepContext)

    const nextStep = (e) => {
        e.preventDefault();
        setStep({currentStep: "3"})
    }

    const returnStep = () => {
        setStep({currentStep: "1"})
    }

    return (
        <>
            <div className="cursor-pointer flex relative text-gray-400" onClick = { () => returnStep() }>
                <div className="absolute flex left-0 top-8">
                    <i className = "fas fa-chevron-left mr-3 mt-1"></i>
                    <span className = "font-semibold">Volver</span>
                </div>
            </div>
            <div id="top" className = "absolute right-10 md:right-20 top-5 md:top-10 text-right">
                <p className = "text-gray-400 font-semibold text-sm uppercase">Step 0{ step.currentStep }/03 <br /> <span className = "normal-case text-base text-gray-500">Localización</span></p>
            </div>
            <div id="main" className = "h-full w-full flex flex-col justify-center items-center sm:mt-0 mt-5 mr-20 ">
                <div id="content" className = "pb-3 border-b border-gray-100 ">
                    <h1 className = "lg:text-3xl text-2xl font-bold text-center sm:text-left">Complete Your Profile!</h1>
                    <p className="text-gray-400 mt-2 text-sm w-80 sm:w-96">
                    Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información
                    </p>
                </div>
                <hr />
                <div id="form" className = "pt-3">
                    <form className = "flex flex-col">
                        <div className="relative">
                            <img className = "absolute top-9 left-5 z-20" src="https://www.countryflags.io/ng/flat/32.png" alt = "Flag" />
                            <select className = "absolute text-gray-400 text-xs font-semibold top-11 left-14 z-20">
                                <option value = "+123">+123</option>
                                <option value = "+456">+456</option>
                                <option value = "+789">+789</option>
                            </select>
                            <FormInput
                                type = "tel"
                                label = "Número de telefono"
                                placeholder = "Enter your phone number"
                                className = "pl-10"
                                style = {{
                                    paddingLeft: '120px'
                                }}
                            />
                        </div>
                        <FormInput
                            type = "email"
                            label = "Dirección"
                            placeholder = "Introduce la dirección completa"
                        />
                        <div className="mb-5 flex flex-col relative">
                            <label className = "text-gray-400 font-semibold text-sm mb-2">País de residencia</label>
                            <select className = "input sm:w-96 text-gray-400 w-80 border border-gray-400 rounded-md px-6 py-3">
                                <option value = "Selecciona uno">Selecciona uno</option>
                                <option value = "España">España</option>
                                <option value = "Perú">Perú</option>
                            </select>
                        </div>
                        <Button 
                            buttonText = "Guardar y continuar"
                            backgroundColor = "#4F934A"
                            textColor = "white"
                            onClick = { nextStep }
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

