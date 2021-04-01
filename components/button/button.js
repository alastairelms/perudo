import { useState, useContext, createContext } from 'react'
import styles from './Button.module.css'

const ToggleContext = createContext();

export default function Button({ children, ...restProps }) {

    const [toggleSelect, setToggleSelect] = useState(false);

    return (
        <>
        <ToggleContext.Provider value={{ toggleSelect, setToggleSelect }}>
            <Button className={styles.button} {...restProps}>{children}</Button>
        </ToggleContext.Provider>
        </>
    )
}