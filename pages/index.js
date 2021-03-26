import react, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import schenkal from '../public/schenkal.jpg'

const accept = (dd) => {
  if(dd == 2){
    return(
      <span>vay göt</span>
    )
  }if(dd == 1){
    return <span>Götün ele geçirildi</span>
  }
}


export default function Home() {
  const [isyes, setIsYes] = useState(0)
  const [insans, setinsans] = useState([])
//fortest
  useEffect(() => {
    console.log(isyes)
  })
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {
          isyes != 0 ? accept(isyes) :(
            <>
            <span>Bu kişi size götten giriş izni istiyor. İzin vermeniz dahilinde bu kişi size götten giriş hakkına sahip olucak</span>
        <span>bknz: götten giriş yasası 25. madde D. fıkrası</span>
        <div style={{display:'flex', justifyContent: 'space-around', width: '100%', height: '100%', alignItems: 'flex-end'}}>
          <div onClick={() => {
            setIsYes(1)
          }} className={styles.button} style={{backgroundColor: '#00FF00'}}>Kabul Et</div>
          <div onClick={() => setIsYes(2)} className={styles.button}>Reddet!</div>
        </div>
            </>
          ) 
        }
      </div>
    </div>
  )
}
