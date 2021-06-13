import React, { useContext } from 'react'
import { StepContext } from '../../context/StepContext';
import { FirstStep } from './steps/FirstStep'
import { PrevStep } from './steps/PrevStep'

export const Rightside = () => {

    const [step, setStep] = useContext(StepContext)

    const renderStep = () => {
        switch (step.currentStep) {
            case "0":
                return (<PrevStep />)
            case "1":
                return (<FirstStep />)
            default: 
                return (setStep({currentStep: "0"}))
        }
    }

    return (
        <div className = "h-screen lg:w-7/12 w-screen flex relative px-10">
            {
                renderStep()
            }
        </div>
    )
}
