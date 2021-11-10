var tl = new TimelineLite;

tl.to(".box3", 2, {
    x:100,
    y:75,
    backgroundColor:"#000",
    ease: Power4.easeIn
  })

  .to (".box3", 1 , {
    scaleX: 1.5,
    scaleY: 1.5,
    backgroundColor: "#454545",
    ease: Back.easeOut.config(1.7)
  });