var duration = 3;
var tl = gsap.timeline({delay:0.2});
//변수 선언
//strength 0~1
// CustomBounce.create("myBounce", {strength:0.7, squash:3});
// // //CustomBounce 객체 생성
// tl.to("#box3", {y:550, duration: duration, ease:"myBounce"});
// tl.to("#box3", {scaleY:0.5, duration: duration, scaleX:1.3, ease:"myBounce-squash", transformOrigin:"bottom"}, 0);

TweenMax.to('.box3', 2.5, { ease: CustomEase.create("custom", "M0,0,C0,0,0.014,0.007,0.022,0.007,0.03,0.007,0.039,0.002,0.045,0,0.051,0.006,0.058,0.017,0.068,0.023,0.075,0.028,0.083,0.03,0.09,0.031,0.097,0.031,0.104,0.029,0.11,0.025,0.12,0.018,0.129,0.007,0.135,0.001,0.135,0.002,0.137,0.002,0.137,0.003,0.144,0.019,0.15,0.036,0.16,0.056,0.167,0.071,0.172,0.08,0.181,0.093,0.189,0.103,0.195,0.111,0.205,0.117,0.211,0.122,0.219,0.125,0.227,0.124,0.235,0.124,0.243,0.121,0.25,0.117,0.258,0.111,0.264,0.104,0.271,0.095,0.28,0.082,0.286,0.073,0.293,0.058,0.304,0.037,0.316,0.005,0.318,0,0.321,0.018,0.345,0.136,0.365,0.224,0.372,0.256,0.377,0.273,0.386,0.305,0.395,0.334,0.399,0.349,0.41,0.377,0.418,0.4,0.424,0.414,0.435,0.436,0.442,0.451,0.448,0.461,0.458,0.473,0.465,0.482,0.471,0.489,0.48,0.494,0.491,0.499,0.502,0.498,0.514,0.503,0.521,0.505,0.526,0.509,0.531,0.515,0.54,0.524,0.546,0.531,0.553,0.543,0.562,0.558,0.567,0.568,0.575,0.585,0.586,0.612,0.592,0.628,0.601,0.656,0.613,0.692,0.618,0.712,0.628,0.749,0.639,0.793,0.645,0.817,0.655,0.863,0.666,0.916,0.679,0.988,0.681,0.999,0.683,0.994,0.695,0.962,0.706,0.941,0.713,0.926,0.719,0.917,0.728,0.904,0.735,0.895,0.741,0.888,0.75,0.882,0.756,0.878,0.764,0.875,0.772,0.875,0.78,0.874,0.788,0.877,0.795,0.882,0.804,0.888,0.811,0.896,0.818,0.906,0.827,0.919,0.832,0.928,0.84,0.943,0.85,0.964,0.859,0.99,0.863,0.999,0.867,0.995,0.877,0.982,0.887,0.975,0.894,0.971,0.902,0.968,0.91,0.968,0.917,0.968,0.925,0.972,0.932,0.977,0.941,0.983,0.948,0.993,0.954,0.999,0.96,0.997,0.969,0.992,0.976,0.992,0.984,0.992,1,1,1,1"), y: -500 });

document.querySelector("#play").addEventListener("click", () => {
  if(tl.progress() == 1) {
    tl.restart()
  } else {
    tl.play();
  }
})
