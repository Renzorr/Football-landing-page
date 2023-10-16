let tl = gsap.timeline();

tl.from("header", {
  y: -100,
  duration: 1,
});

tl.from("h1", {
  y: "-200%",
  duration: 0.7,
});

tl.from(".marquee", {
  opacity: 0,
  duration: 1,
});

tl.from(
  ".hero-img",
  {
    opacity: 0,
  },
  "-=0.2"
);
