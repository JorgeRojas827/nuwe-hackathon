import React from 'react'
import { Leftside } from '../components/leftside/Leftside'
import { Rightside } from '../components/rightside/Rightside'

export const MainLayout = () => {
    return (
        <div className = "w-screen h-screen flex flex-row">
            <Leftside />
            <Rightside />
        </div>
    )
}
