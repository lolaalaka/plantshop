import Navbar from "../components/navbar";
import styles from "../styles/shop.module.scss";
import bottomShop from "../public/Bottom-shop.png"
import Image from "next/image";

export default function shop (){

     return(
         <main className={styles.background}>
             <Navbar/>
          <div>
              <p className={styles.lets}>Foliage for <br/> <span className={styles.plant}>plants</span></p>
              <p className={styles.add}> Add some color to your home, give it a <br /> little attention, the
              plants will <br /> accompany you quietly</p>
          </div>
          
          <div className="bottomCon" >
          <Image src={bottomShop} alt=""/>
          </div>
         
        </main>
     )

}