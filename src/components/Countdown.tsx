import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown(){

    const [time, setTime] = useState(0.05 * 60)
    const [active, setActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time/60)
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

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
        }
    }, [active, time])
    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>
        
            {hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                {active ? (
                    <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                        Abandonar ciclo
                    </button>
                ) : (
                    <button type="button" className={styles.countdownButton} onClick={startCountdown}>
                        Iniciar um ciclo
                    </button>
                )}
                </>
            )}

            
            
        </div>

    );
}