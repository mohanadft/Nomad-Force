let navLinks = document.querySelectorAll(".nav-link"),
  header = document.querySelector("header");

function removeAllActiveLinks() {
  navLinks.forEach((e) => e.classList.remove("active"));
}

let sec1 = document.querySelector(".video--back"),
  sec2 = document.querySelector(".our-studio"),
  sec3 = document.querySelector(".portfolio"),
  sec4 = document.querySelector(".news-events"),
  sec5 = document.querySelector(".contact");

window.onscroll = function () {
  if (
    window.scrollY >= sec1.scrollTop &&
    window.scrollY <= sec1.offsetTop + sec1.offsetHeight
  ) {
    removeAllActiveLinks();
    document.querySelector(".home-link").classList.add("active");
  } else if (
    window.scrollY >= sec2.scrollTop &&
    window.scrollY <= sec2.offsetTop + sec2.offsetHeight
  ) {
    removeAllActiveLinks();
    document.querySelector(".studio-link").classList.add("active");
  } else if (
    window.scrollY >= sec3.scrollTop &&
    window.scrollY <= sec3.offsetTop + sec3.offsetHeight / 2
  ) {
    removeAllActiveLinks();
    document.querySelector(".port-link").classList.add("active");
  } else if (
    window.scrollY >= sec4.scrollTop &&
    window.scrollY <= sec4.offsetTop + sec4.offsetHeight - 600
  ) {
    removeAllActiveLinks();
    document.querySelector(".news-link").classList.add("active");
  } else if (
    window.scrollY >= sec4.scrollTop &&
    window.scrollY <= sec4.offsetTop + sec4.offsetHeight
  ) {
    removeAllActiveLinks();
    document.querySelector(".contact-link").classList.add("active");
  }
};

let navbar = document.querySelector(".navbar"),
  menuBtn = document.querySelector(".toggle-menu");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuBtn.querySelector(".bx").classList.toggle("bx-menu-alt-right");
  menuBtn.querySelector(".bx").classList.toggle("bx-x");
});

const sr = ScrollReveal({
  origin: "top",
  distance: "5px",
  duration: 1000,
  reset: true,
});

sr.reveal(".hero--text h1");
sr.reveal(".hero--text p", { origin: "bottom" });

sr.reveal(".logo", {
  origin: "left",
  distance: "20px",
  duration: 400,
  reset: false,
});

sr.reveal(".toggle-menu", {
  origin: "right",
  distance: "20px",
  duration: 400,
  reset: false,
});

sr.reveal(".our-studio h1", {
  origin: "left",
  distance: "50px",
  duration: 400,
});

sr.reveal(".text--content p", { origin: "bottom" });

sr.reveal(".stand-up h1", { origin: "left", distance: "50px", duration: 400 });

sr.reveal(".stand-up p", { origin: "left", distance: "50px", duration: 400 });

sr.reveal(".stand-up a", { origin: "left", distance: "50px", duration: 400 });

sr.reveal(".portfolio h1", { origin: "top", distance: "20px", duration: 400 });

sr.reveal(".portfolio .container .imgs-container .left-imgs img", {
  origin: "left",
  distance: "20px",
  duration: 600,
});

sr.reveal(".portfolio .container .imgs-container .right-imgs img", {
  origin: "right",
  distance: "20px",
  duration: 600,
});

sr.reveal(".news-events .container .left", {
  origin: "left",
  distance: "20px",
  duration: 600,
});

sr.reveal(".news-events .container .right", {
  origin: "right",
  distance: "20px",
  duration: 600,
});

sr.reveal(".contact .info", {
  origin: "left",
  distance: "20px",
  duration: 600,
});

sr.reveal(".contact .links", {
  origin: "right",
  distance: "20px",
  duration: 600,
});
