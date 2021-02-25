import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompletedChallengs.module.css'

export function CompletedChallengs(){
    const { challengeCompleted } = useContext(ChallengeContext)

    return(
        <div className={styles.completedChallengsContainer}>
            <span>Desafios Completos</span>
            <span>{challengeCompleted}</span>
        </div>
    );
}