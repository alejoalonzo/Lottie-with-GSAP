let target = gsap.utils.toArray(".lottie-trigger")[0];
let animation = lottie.loadAnimation({
  container: target,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://assets7.lottiefiles.com/private_files/lf30_ghysqmiq.json",
});

animation.addEventListener("DOMLoaded", function () {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: target,
      pin: true,
      scrub: true,
      start: "top top",
      end: "+=750%",
      onUpdate: self => {
        // console.log((self.progress * (animation.totalFrames - 1)).toFixed(0));
        animation.goToAndStop(
          self.progress * (animation.totalFrames - 1),
          true
        );
      },
    },
  });

  tl.fromTo(".text1", { y: 200 }, { y: -300, duration: 1 }, 0);
  tl.fromTo(".text2", { y: 200 }, { y: -300, duration: 1 }, 2);

  let play1980 = document.querySelector("#play1980");
  let play1990 = document.querySelector("#play1990");
  let play2002 = document.querySelector("#play2002");
  let play2020 = document.querySelector("#play2020");

  play1980.addEventListener("click", () => {
    animation.goToAndStop(40, true);
  });

  play1990.addEventListener("click", () => {
    animation.goToAndStop(60, true);
  });
  play2002.addEventListener("click", () => {
    animation.goToAndStop(70, true);
  });
  play2020.addEventListener("click", () => {
    animation.goToAndStop(80, true);
  });
});
