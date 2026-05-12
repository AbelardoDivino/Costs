import styles from './Mensagem.module.css'
import { useState, useEffect } from 'react'
function Mensagem({type,mgs}){

    const [visible,setvisible] = useState(true)

    useEffect(() => {
        if (!mgs) {
            setvisible(false)
            return
        }
        const timer = setTimeout(() => {
            setvisible(false)
        }, 3000)
        return () => clearTimeout(timer)
    }, [mgs])

    return (
       <>
       {visible && (
        <div className={`${styles.message} ${styles[type] || ''}`}>{mgs}</div>
       )}
       </>
    )
}
export default Mensagem