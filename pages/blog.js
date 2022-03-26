import Navbar from "../components/navbar"
import styles from "../styles/blog.module.scss"
import Image from "next/image";
import button from "../public/Button.png"
import purplefruit from "../public/GardenerInfo.png"
import foliage from "../public/Card-foliage.png"
import pucculent from "../public/Card-pucculent.png"
import bottomImage from "../public/Bottom.png"
import Link from "next/link";


export default function blog() {
return (
    <main className={styles.background}>
        <Navbar/>
    <div className={styles.fullCon}>
        <div>
            <p className="service service-home"> Service for <br/><span className="home">home plants.</span></p>
            <p className="configure"> <span className={styles.sevenDays}>7-14 DAYS WAITING</span> <br/>If you don’t know what plants you can add to the<br/> space,we can provide you with selected <br/> plants,and configure your space.</p>
            <div className="btn"> <Image src={button} alt=""/></div>
            <div className={styles.purpleFruit}> <Image src={purplefruit} alt=""/> </div>
        </div>
        <div className={styles.imagesCon}>
            <div className={styles.twoImages}> 
               <Link href="shop/foliage">
               <a>< Image src={foliage} alt=""/> </a>
               </Link>   
            </div>
            <div>
                <Image className={styles.twoImages}src={pucculent} alt=""/>
            </div>
        </div>
    </div>
    <div className={styles.bottomCon} >
          <Image src={bottomImage} alt=""/>
    </div>
    </main>
)
}