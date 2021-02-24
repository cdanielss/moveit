import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/cdanielss.png" alt="Imagem de Perfil"/>
            <div>
                <strong>Carlos Daniel</strong>
                <p>
                    <img src="icons/level.svg" alt="icon"/>
                    Level 1</p>
            </div>
        </div>
    );
}