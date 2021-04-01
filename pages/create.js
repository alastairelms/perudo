import Button from '../components/button/button'
import styles from './Styles.module.css'

export default function Create() {
    return (
        <>
        <h1 className={styles.titleContainer}>HOW MANY PLAYERS?</h1>
            <div className={styles.buttonContainer}>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
            </div>
        </>
    )
}