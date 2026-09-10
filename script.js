let tl = gsap.timeline()
let sectionTitleH1 = document.querySelector(".section-title h1");
let sectionTitlePera = document.querySelector(".section-title p");
let revealBox = document.querySelector(".reveal-box");
let level5Content = document.querySelector(".level5-content h1");
let level5ContentImageBox = document.querySelector(".level5-content .image-box");
let level5ContentPera = document.querySelector(".level5-content p");
let level5Contentbutton = document.querySelector(".level5-content button");
let horizontalHeading = document.querySelector(".horizontal-heading");
let projectCard = document.querySelectorAll(".project-card");
let pinLeft = document.querySelector(".pin-left");
let pinItem = document.querySelectorAll(".pin-item");
let bossTopH1 = document.querySelectorAll(".boss-top h1");
let bossTopPera = document.querySelectorAll(".boss-top p");
let bossProjects = document.querySelectorAll(".boss-projects");
let bossImage = document.querySelectorAll(".boss-image");
let finalButton = document.querySelectorAll("#finalButton");
let horizontalWrapper = document.querySelectorAll(".horizontal-wrapper");

function yAxisScroll(Ypage) {
  gsap.from(Ypage, {
    y: 35,
    opacity: 0,
    duration: 0.6,
    delay: 1,
    stagger: 1.3,
    scrollTrigger: {
      trigger: Ypage,
      scroller: "body",
      start: "top 70%", 
      end: "bottom 30%",
      scrub: 0.9
    }
  });
}


yAxisScroll(level5ContentImageBox);
yAxisScroll(horizontalHeading);
yAxisScroll(bossImage);

function xAxisScroll(Xpage) {
  gsap.from(Xpage,{
    x: -30,
    opacity: 0,
    duration: 0.6,
    delay: 0.8,
    scrollTrigger:{
      trigger: Xpage,
      scroller: "body",
      start: "top 40%", 
      end: "bottom 40%",
      // scrub: 0.9
    }
  })
}

xAxisScroll(pinLeft)
xAxisScroll(bossTopH1)
xAxisScroll(bossTopPera)
xAxisScroll(level5Content)

function scrollerBodyTrigger() {
  gsap.from(level5ContentPera, {
    x: -20,
    opacity: 0,
    duration: 0.6,
    delay: 0.8,
    scrollTrigger: {
    trigger: level5ContentPera,
    scroller: "body",
    scrub: 0.9
    }
  });

  gsap.from(level5Contentbutton, {
    x: -20,
    opacity: 0,
    duration: 0.6,
    delay: 1.2,
    scrollTrigger: {
    trigger: level5Contentbutton,
    scroller: "body",
    scrub: 0.9
    }
  })

    gsap.from(pinItem, {
      x: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.8,
      stagger: 1.4,
      scrollTrigger: {
      trigger: pinItem,
      scroller: "body",
      start: "top 50%",
      // scrub: 0.9
    }
  })

      gsap.from(finalButton, {
      x: -40,
      opacity: 0,
      duration: 0.6,
      delay: 0.8,
      stagger: 1.4,
      scrollTrigger: {
      trigger: finalButton,
      scroller: "body",
    }
  })
}

function mainContainer() {
  tl.from(sectionTitleH1, {
    y: 27,
    opacity: 0,
    duration: 0.6,
    delay: 0.8,
    ease: "power3.out"
  })

  tl.from(sectionTitlePera, {
    x: -27,
    opacity: 0,
    duration: 0.6,
    delay: 0.2,
    ease: "power3.out"
  })

  tl.from(revealBox, {
    y: 25,
    opacity: 0,
    duration: 0.6,
    delay: 0.2,
    ease: "power3.out",
  })
}

scrollerBodyTrigger();
mainContainer();

function firstCard() {
gsap.registerPlugin(ScrollTrigger);
gsap.to(horizontalWrapper, {
  x: -800,
  ease:"power3.out",
  scrollTrigger: {
    trigger: horizontalWrapper,
    scroller: "body",
    start: "top 15%",
    scrub: 0.8,
    pin: true,
  }
});
}

firstCard()

function secondCard() {
gsap.registerPlugin(ScrollTrigger);
gsap.to(bossProjects, {
  x: -250,
  ease:"power3.out",
  scrollTrigger: {
    trigger: bossProjects,
    scroller: "body",
    start: "top 15%",
    scrub: 0.8,
    pin: true,
  }
});
}

secondCard()


