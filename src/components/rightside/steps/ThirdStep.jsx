import React, { useContext, useState } from 'react'
import { Button } from '../Button'
import { FormInput } from '../FormInput'
import { StepContext } from '../../../context/StepContext'
import SuccessCheck from '../../../assets/successCheck.png'
import { Modal } from '../Modal'
import '../../Root.css'

export const ThirdStep = () => {

    const [step, setStep] = useContext(StepContext);
    const [show, setShow] = useState(false);
    const [creditNumber, setCreditNumber] = useState("");
    const [secretCode, setSecretCode] = useState("");

    const openModal = (e) => {
        e.preventDefault();
        setShow(true)
    }

    const returnStep = () => {
        setStep({currentStep: "2"})
    }

    const closeModal = () => {
        setShow(false);
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
                        <div className="relative">
                            <figure>
                                <img style = {{
                                    display: creditNumber.length >= 12 && creditNumber.length <= 18 ? 'flex' : 'none'
                                }} className = "absolute right-7 top-11 z-20" src= { SuccessCheck } alt="successCheck" />
                            </figure>
                            <FormInput
                                type = "text"
                                label = "Número de tarjeta"
                                placeholder = "Ingrese su número de tarjeta"
                                onChange = { (e) => setCreditNumber(e.target.value) }
                            />
                        </div>
                        <div className="relative">
                            <figure>
                                <img style = {{
                                    display: secretCode.length >= 3 && secretCode.length <= 5 ? 'flex' : 'none'
                                }} className = "absolute right-7 top-11 z-20" src= { SuccessCheck } alt="successCheck" />
                            </figure>
                            <FormInput
                                type = "text"
                                label = "Código secreto"
                                placeholder = "Introduzca su código secreto"
                                onChange = { (e) => setSecretCode(e.target.value) }
                            />
                        </div>
                        <Button 
                            buttonText = "Crear cuenta"
                            backgroundColor = "#4F934A"
                            textColor = "white"
                            onClick = { openModal }
                        />
                    </form>
                    <div id="info" className="text-gray-400 flex justify-center items-center mt-5">
                        <i className = "fas fa-lock opacity-50 fa-sm mr-3"></i>
                        <p className = "text-xs">Tu información es segura</p>
                    </div>
                </div>
            </div>
            {
                show ? <Modal 
                            title = "¡Todo guay!"
                            content = "Tu cuenta se ha creado correctamente"
                            buttonText = "Cerrar"
                            secButtonText = "Vamos para Nuwe"
                            closeModal = { closeModal }
                        /> : null
            }
        </>
    )
}

