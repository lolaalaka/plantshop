// import gsap from "gsap";
// import { useRef} from "react";

// import { ScrollTrigger } from "gsap";


// let tl = gsap.timeline();
// const el = useRef();
// const q = gsap.utils.selector(el);

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


let tl = gsap.timeline();


export const NavAnimation = (nav) => {
  
    tl.from(nav, {
      duration: 0.5,
      y: -20,
      opacity: 0,
      ease: "power3.easeIn",
    });
  };
  