import { Children, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Countdown } from "../components/Countdown";
import { ChallengeContext } from "./ChallengeContext";

let countdownTimeout: NodeJS.Timeout

interface CountdownContextData {
    minutes: number
    seconds: number
    hasFinished: boolean
    active: boolean
    startCountdown: () => void
    resetCountdown: () => void
}

export const CountdownContext = createContext({} as CountdownContextData)

interface CountDownProviderProps {
    children: ReactNode
}

export function CountdownProvider({children}: CountDownProviderProps) {
    const { startNewChallenge } = useContext(ChallengeContext)

    const [time, setTime] = useState(0.05 * 60)
    const [active, setActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time/60)
    const seconds = time % 60

    function startCountdown() { 
        setActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)

        setActive(false)
        setTime(0.05 * 60)
    }

    useEffect(() => {
        if (active && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (active && time === 0){
            setHasFinished(true)
            setActive(false)
            startNewChallenge()
        }
    }, [active, time])
    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            active,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}