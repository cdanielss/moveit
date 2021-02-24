import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox () {
    const hasActiveChalleng = true

    return (
        <div className={styles.challengeBoxContainer}>
            {hasActiveChalleng ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>
                    <main>
                        <img src="icons/body.svg" alt="Body"/>
                        <strong>Novo desafio</strong>
                        
                        <p>
                            Levante e faça uma caminhada de 3 minutos
                        </p>
                        
                        <footer>
                            <button type="button" className={styles.challengeFailedButton}>Falhei</button>
                            <button type="button" className={styles.challengeCompletedButton}>Completei</button>
                        </footer>
                    </main>
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