import styles from "../styles/navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Logo.png";
import ham from "../public/hamburger.png";
import nightmode from "../public/subtract.png";
import { useState , useEffect, useRef} from "react";
import { NavAnimation } from "../animations";

const Navbar = () => {
  const ref = useRef();

  useEffect(() => {
    NavAnimation(ref.current);
  }, [ref]);


  const [showNav, setShowNav] = useState(true);
  const [showHam, setShowHam] = useState(true);

  const openSmallNav = () => {
    setShowNav(!showNav);
    setShowHam(!showHam);
  };

  const hideSmallNav = () => {
    setShowNav(!showNav);
    setShowHam(true);
  };

  return (
    <div >
      <nav className={ `${styles["navCon"]} ${styles["space"]}`} ref={ref}>
        <Link href="/">
          <a className={styles.navList}>
            <Image src={logo} alt="" />
          </a>
        </Link>
        <Link href="/service">
          <a className={styles.navList}>Service</a>
        </Link>
        <Link href="/blog">
          <a className={styles.navList}>Blog</a>
        </Link>
        <Link href="/shop">
          <a className={styles.navList}>Shop</a>
        </Link>
        <Link href="/location">
          <a className={styles.navList}>Location</a>
        </Link>
        <button className={`${styles["navList"]} ${styles["btn"]}`}>
          Check out(0)
        </button>
      </nav>

      <div className={styles.smallCon}>
        <div
          className={showHam === true ? styles.hamCon : styles.hamConHide}
          onClick={openSmallNav}
        >
          <Image src={ham} alt="" width="25px" />
        </div>
        <div className={styles.nightMode}>
          <Image src={nightmode} alt="" width="20px" />
        </div>
      </div>

      <nav className={showNav === true ? styles.smallNav : styles.showSmNav}>
        <Link href="/">
          <a className={styles.smallNavList}>Home</a>
        </Link>
        <Link href="/service">
          <a className={styles.smallNavList}>Service</a>
        </Link>
        <Link href="/blog">
          <a className={styles.smallNavList}>Blog</a>
        </Link>
        <Link href="/shop">
          <a className={styles.smallNavList}>Shop</a>
        </Link>
        <Link href="/location">
          <a className={styles.smallNavList}>Location</a>
        </Link>
        <div className={styles.close} onClick={hideSmallNav}>
          <svg className={styles.svg}>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
