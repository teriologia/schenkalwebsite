import react from 'react'
import styles from '../styles/Home.module.css'
import schenkal from '../public/schenkal.jpg'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <div className={styles.blur}>
      <div className={styles.sad} style={{position: 'absolute', bottom: 5, width: 300, left:0, right:0, marginLeft: 'auto', marginRight: 'auto'}}> CREATED BY TERIOLOGIA</div>
        <div className={styles.headline}><span>BÜYÜK ÇEKİLİŞ </span> <span className={styles.date}> 21.10.2020</span></div>
        <div className={styles.midLine}>1 değil 2 değil<span className={styles.underline}> TAM 4X FALL GUYS </span></div>
        <div className={styles.fillLine}> <div className={styles.first}></div> <div className={styles.second}></div> <div className={styles.third}><span className={styles.nani}>NANİ???</span></div></div>
        <div className={styles.fillLine}> <div className={styles.first}><span className={styles.nani}>NE YOKSA SEN HALA ÇEKİLİŞE KATILMADIN MI?</span></div> <div className={styles.second}></div> <div className={styles.third}></div></div>
        <div className={styles.fillLine}> <div className={styles.first}></div> <div className={styles.second} style={{flexDirection: 'column'}}><span className={`${styles.nani} ${styles.sub}`}>O ZAMAN ÇABUK ŞUNA TIKLA!!! ABONELERE 2X ŞANS</span> <div className={styles.twitch}><div className={styles.twitchIcon} onClick={() =>  window.open("https://www.twitch.tv/schenkal", "_blank")}>SCHENKAL TWİTCH</div></div></div> <div className={styles.third}></div></div>
        <div style={{paddingTop: 40, paddingLeft: 20, display: 'flex'}}>
          <div style={{flexDirection: 'column', marginRight: 20}}>
            <div className={styles.schenkalSay}>SCHENKAL DİYOR Kİ:</div>
            <img src={schenkal} />
          </div>
          <div style={{flexGrow: 1, paddingTop: 70}}>
            <div className={styles.fillLine}> <div className={styles.first}><span className={`${styles.nani} ${styles.cm}`}>BENİM Kİ TAM 70CM</span></div> <div className={styles.second}></div> <div className={styles.third}></div></div>
            <div className={styles.fillLine}> <div className={styles.first}></div> <div className={styles.second}><span className={styles.nani}>HERKES 30CM VERDİ AMA...</span></div> <div className={styles.third}></div></div>
            <div className={styles.fillLine}> <div className={styles.first}></div> <div className={styles.second}></div> <div className={styles.third} style={{flexGrow: 5}}><span className={styles.nani}>BENDEN SİZE TAM 70CM ZURNA DÜRÜM</span></div></div>
            <div className={styles.fillLine}> <div className={styles.first}></div> <div className={styles.second}></div> <div className={styles.third} style={{flexGrow: 3}}><span className={styles.nani}>NE FALL GUYS'IN ZAATEN VAR MI???</span></div></div>
            <div className={styles.fillLine}> <div className={styles.first}></div> <div className={styles.second}></div> <div className={styles.third} style={{flexGrow: 2}}><span className={styles.nani} style={{fontSize: 32}}>SORUN DEĞİL!!!!!</span></div></div>
            <div className={styles.fillLine}> <div className={styles.first}></div> <div className={styles.second}></div> <div className={styles.third} style={{flexGrow: 1}}><span className={styles.nani}>SCHENKAL DA ÇÖZÜMLER ASLA TÜKEMEZ</span></div></div>
            <div className={styles.fillLine}> <div className={styles.first}></div> <div className={styles.second}></div> <div className={styles.third} style={{flexGrow: 0.5}}><span className={styles.nani}>40TL DEĞERİNDE BİR HEDİYE SEÇ</span></div></div>
            <div className={`${styles.fillLine} ${styles.sad}`} style={{justifyContent: 'center', alignItems: 'center'}}>40TRY: 5,09$ - 4,30€ </div>
          </div>
        </div>
      </div>
    </div>
  )
}
