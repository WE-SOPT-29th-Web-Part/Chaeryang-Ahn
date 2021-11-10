gsap.from(".box1", { duration: 3, x: 200, width: 400, opacity: 0.2, ease: 'steps(10)'});
gsap.fromTo(".box2", { fontSize: 40 }, { duration: 3, x: 300, fontSize: 16 });
gsap.set(".box3", { x: 100, width: 200, backgroundColor: 'skyblue', });