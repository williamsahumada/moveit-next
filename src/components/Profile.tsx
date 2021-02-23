import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainers}>
            <img src="https://avatars.githubusercontent.com/u/26718694?s=460&u=a4b54907ddd81e2011fef6e29efb6be5f90b4ec3&v=4" alt="Williams Ahumada"/>
            <div>
                <strong>Williams Ahumada</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}