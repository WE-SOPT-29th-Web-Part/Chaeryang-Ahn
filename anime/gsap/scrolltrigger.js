import { gsap } from 'gsap';
import { ScrollTrigger } from "./package/all.js";

gsap.registerPlugin(ScrollTrigger);
gsap.to(".box2", {
    scrollTrigger: ".box2", x: 400, duration: 2});