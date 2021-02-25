import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(ChallengeContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/cdanielss.png" alt="Imagem de Perfil"/>
            <div>
                <strong>Carlos Daniel</strong>
                <p>
                    <img src="icons/level.svg" alt="icon"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}