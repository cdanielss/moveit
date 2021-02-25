import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css'


export function ChallengeBox () {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext)

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Body"/>
                        <strong>Novo desafio</strong>
                        
                        <p>{activeChallenge.description}</p>
                    </main>
                    
                    <footer>
                        <button type="button" className={styles.challengeFailedButton} onClick={resetChallenge}>Falhei</button>
                        <button type="button" className={styles.challengeCompletedButton} onClick={completeChallenge}>Completei</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up"/>
                        Avance de Level completando desafios
                    </p>
                </div>
            )}
        </div>
    );
}