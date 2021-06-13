import React, { useContext } from 'react'
import { StepContext } from '../../../context/StepContext'
import { Card } from '../Card'
import '../../Root.css'

// Icons
import Briefcase from '../../../assets/briefcase.png'
import PolygonVoid from '../../../assets/PolygonVoid.png'
import PolygonFill from '../../../assets/PolygonFill.png'
import User from '../../../assets/user.png'

export const PrevStep = () => {

    const [step, setStep] = useContext(StepContext)

    const handleClick = () => {
        setStep({currentStep: "1"})
        console.log(step)
    }

    return (
        <>
            <div id="top" className = "absolute bottom-32 right-20 lg:right-20 md:right-20 lg:top-10 md:top-10">
                <p className = "text-gray-400 font-semibold">Ya tienes cuenta? <span className = "text-primary cursor-pointer hover:border-2">Inicia sesión</span></p>
            </div>
            <div id="main" className = "h-full w-full flex flex-col justify-center items-center mr-40 pb-20">
                <div id="content" className = "mb-8">
                    <h1 className = "lg:text-3xl text-2xl font-bold">¡Únete a la comunidad!</h1>
                    <p className="text-gray-400 mt-2">
                        Para empezar, dinos que cuenta te gustaría <br />
                        abrir
                    </p>
                </div>
                <div id="cards">
                    <Card
                        iconUrl = { User }
                        bkgUrl = { PolygonFill }
                        title = "Developers"
                        description = "Cuenta personas para entrar en el mundo dev"
                        onClick = {
                            () => handleClick()
                        }
                    />
                    <Card
                        iconUrl = { Briefcase }
                        bkgUrl = { PolygonVoid }
                        title = "Business"
                        description = "Tienes o perteneces a una compañía"
                        onClick = {
                            () => handleClick()
                        }
                    />
                </div>
            </div>
        </>
    )
}
