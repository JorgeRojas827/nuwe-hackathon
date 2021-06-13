import React, { useContext } from 'react'
import { StepContext } from '../../context/StepContext';
import { PrevStep } from './steps/PrevStep'
import { FirstStep } from './steps/FirstStep'
import { SecondStep } from './steps/SecondStep';
import { ThirdStep } from './steps/ThirdStep';

export const Rightside = () => {

    const [step] = useContext(StepContext)

    const renderStep = () => {
        switch (step.currentStep) {
            case "0":
                return (<PrevStep />)
            case "1":
                return (<FirstStep />)
            case "2":
                return (<SecondStep />)
            case "3":
                return (<ThirdStep />)
            default: 
                return (<PrevStep />)
        }
    }

    return (
        <div className = "h-screen lg:w-7/12 w-screen flex px-14">
            {
                renderStep()
            }
        </div>
    )
}
