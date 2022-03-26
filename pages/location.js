import Navbar from "../components/navbar"
import styles from "../styles/location.module.scss"
import Image from "next/image";
import bottomImage from "../public/bottom.png";
import button from "../public/Button2.png"


export default function location() {

    return(
        <main className={styles.background}>
            <Navbar/> 
            <div className={styles.decoration}></div>
            <div className={styles.midCard}>
             <div className={styles.logo}>  </div>
             <p className={styles.location}> Location</p>
             <p className={` ${styles["bothText"]} ${styles["topText"]}`}>No. 100, Ln. 00, Chifeng St., Datong <br/> Dist., Taipei City 103, Taiwan (R.O.C.)</p>
             <p className={` ${styles["bottomText"]} ${styles["bothText"]}`}>Open  11:00 - 22:00</p>
             <div className={styles.btn}> <Image  src={button} alt=""/></div>
            </div>
            
           <div className="bottomCon">
             <Image src={bottomImage} alt=""/>
          </div>
            
           
        </main>
    )
}