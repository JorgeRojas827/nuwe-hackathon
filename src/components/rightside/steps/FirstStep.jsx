import React, { useContext, useState } from 'react';
import { Button } from '../Button';
import { FormInput } from '../FormInput';
import { StepContext } from '../../../context/StepContext';
import iconGoogle from '../../../assets/iconGoogle.png';
import '../../Root.css';
import { Modal } from '../Modal';

export const FirstStep = () => {

    const [step, setStep] = useContext(StepContext);
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const reviewEmail = () => {
        const regexp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        if (regexp.test(email)) {
            setError(false);
            setStep({currentStep: "2"})
        } else {
            setError(true)
        }
    }

    const nextStep = (e) => {
        e.preventDefault();
        reviewEmail()
    }

    const returnStep = () => {
        setStep({currentStep: "0"})
    }

    const closeModal = () => {
        setError(false);
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
                            placeholder = "Enter your entire name"
                        />
                        <FormInput
                            type = "email"
                            label = "Correo Electrónico*"
                            placeholder = "Enter email adress"
                            value = { email }
                            onChange = { (e) => setEmail(e.target.value) }
                        />
                        <FormInput
                            type = "password"
                            label = "Contraseña*"
                            placeholder = "Enter your secret password"
                            show = "true"
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
                            onClick = { nextStep }
                        />
                        <h4 className = "my-5"><span>o</span></h4>
                        <Button 
                            buttonText = "Regístrate con Google"
                            icon = { iconGoogle }
                            backgroundColor = "white"
                            textColor = "black"
                            boxShadow = "0px 2px 7px 1px rgba(0,0,0,0.06)"
                            onClick = { nextStep }
                        />
                    </form>
                </div>
            </div>
            {
                error ? 
                    <Modal
                        title = "¡Ups, algo ha salido mal!"
                        content = "Parece que el correo electrónico introducido es incorrecto. Por favor, revísalo y vuelve a intentarlo denuevo"
                        buttonText = "Cerrar"
                        closeModal = { closeModal }
                    />
                : null 
            }
            
        </>
    )
}
