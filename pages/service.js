import Navbar from "../components/navbar";
import styles from "../styles/service.module.scss";
import bottomImage from "../public/Bottom.png"
import button from "../public/Button.png"
import Image from "next/image";


export default function service() {
 
    return(
      <main className={styles.background}>
        <Navbar/>
        <div></div>
          <div className={styles.midCard}>
            <p className="service service-home"> Service for <br/><span className="home">home plants.</span></p>
            <p className="configure">If you don’t know what plants you can add to the<br/> space,we can provide you with selected <br/> plants,and configure your space.</p>
            <div className="btn"> <Image  src={button} alt=""/></div>
          </div>
          <div className="bottomCon" >
          <Image src={bottomImage} alt=""/>
          </div>
          
      </main>
    )
}
    
