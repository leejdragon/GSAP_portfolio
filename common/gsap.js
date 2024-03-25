gsap.registerPlugin(ScrollTrigger);

gsap.from('.tit', {
  duration: 2,
  yPercent: 100,
  ease: "power4",
  stagger: 0.1
});

$(function () {
  //01.circle
  gsap.timeline({
    scrollTrigger: {
      trigger: '.cont02',
      start: '0% 50%',
      end: '30% 0%',
      scrub: 1
    }
  })
    .fromTo('.circle', {
      'width': '0',
      'height': '0',
      'duration': '10',
      'ease': 'elastic',
      'top': '3%' },
      {'width': '2500px',
      'height': '2500px',
      'duration': '10',
      'top': '30%' }, 0)

  //02.text
  gsap.timeline({
    scrollTrigger: {
      trigger: '.cont02 .textBox',
      start: '0% 80%',
      end: '100% 80%',
      scrub: 1
    }
  })
  .fromTo('.textBox', {
    'top': '50%',
    'duration': '5',
    'ease': 'elastic',
    'opacity': '0' },
    {'duration': '5',
    'ease': 'none',
    'opacity': '1',
    'top': '40%' }, 0)
});


gsap.from(".logo_img", {
  scrollTrigger: {
    trigger: '.cont03 h2',
    start:'top center',
    end: 'bottom 50%',
    scrub: 1
    // markers: true
  },

  duration: 1,
  y: 200,
  ease: "power1.inOut",
  stagger: {
    from: 6,
    amount: 1.5
  }
});



const ani5 = gsap.timeline();
ani5.from(".work_img:nth-child(1)", {autoAlpha:0, y: 300})
    .from(".work_img:nth-child(2)", {autoAlpha:0, y: -300})
    .from(".work_img:nth-child(3)", {autoAlpha:0, y: 300})
    .from(".work_img:nth-child(4)", {autoAlpha:0, y: -300})
    .from(".work_img:nth-child(5)", {autoAlpha:0, y: 300})
    .from(".work_img:nth-child(6)", {autoAlpha:0, y: -300})
    .from(".work_img:nth-child(7)", {autoAlpha:0, y: 300})
    .from(".work_img:nth-child(8)", {autoAlpha:0, y: -300})

ScrollTrigger.create({
    animation: ani5,
    trigger: ".cont04",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    // markers: true,
    anticipatePin: 1,
    stagger: {
      amount:8,
      from:"random"
    }
});


gsap.from(".cont05 img", {
  y: "-100%",
  duration: 1.2,
  ease: "power4.inOut",
  duration: 2,
  scrollTrigger: {
    trigger: '.cont05 .reason',
    start: "top 100%",
    end: "bottom 100%",
    scrub: 3,
  }
});


gsap.from('.cont05 .reason p', {
  duration: 3,
  yPercent: 100,
  ease: "power4",
  autoAlpha: 0,
  scrollTrigger: {
    trigger: '.cont05 .reason',
    scrub: 2,
    autoAlpha:1
  }
});


// gsap.fromTo(".cont05 img", {
//   scale: 1.2}, {
//     scale: 1,
//     duration: 1.4 ,
//     ease: "power4.inOut"
//   });


let links = gsap.utils.toArray("#parallax__nav ul li a");

links.forEach(link => {
    let element = document.querySelector(link.getAttribute("href")),
    
    linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top"
    });

    ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: self => setActive(link)
    });

    link.addEventListener("click", e => {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
    });
});

function setActive(link) {
    links.forEach(el => el.classList.remove("active"));
    link.classList.add("active");
}
