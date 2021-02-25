import { createContext, useState, ReactNode, useEffect } from "react";
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye'
    description: string
    amount: number
}

interface ChallengeContextData {
    level: number
    currentExperience: number 
    challengeCompleted: number
    activeChallenge: Challenge
    experienceToNextLevel: number
    levelUp: () => void
    startNewChallenge: () => void
    resetChallenge: () => void
    completeChallenge: () => void
} 

interface ChallengeProviderProps {
    children: ReactNode
}

export const ChallengeContext = createContext({} as ChallengeContextData)

export function ChallengeProvider({children}: ChallengeProviderProps){
    const [level, setLevel] = useState(1)
    const [currentExperience, setExperience] = useState(0)
    const [challengeCompleted, setChallengeCompleted] = useState(0)
    const [activeChallenge, setActiveChallege] = useState(null)
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    function levelUp(){
        setLevel(level + 1)
    }

    function startNewChallenge(){
        const randomChallenge = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallenge]

        setActiveChallege(challenge)    
        
        new Audio('/notification.mp3').play()

        if(Notification.permission === 'granted'){
            new Notification('Novo Desafio', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }   

    function resetChallenge(){
        setActiveChallege(null)
    }

    function completeChallenge(){
        if(!activeChallenge){
            return
        }
        
        const  {amount} = activeChallenge
        let finalExperience = currentExperience + amount

        if (finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }
        setExperience(finalExperience)
        setActiveChallege(null)
        setChallengeCompleted(challengeCompleted + 1)
    }

    return (
        <ChallengeContext.Provider value={{
            level, currentExperience, 
            challengeCompleted, 
            activeChallenge,
            experienceToNextLevel,
            startNewChallenge, 
            levelUp, 
            resetChallenge,
            completeChallenge
        }}>
            
            {children}
        </ChallengeContext.Provider>
    )
}
