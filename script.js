// Select the main container
const main = document.querySelector(".main");

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: main,
    smooth: true
});

// Refresh ScrollTrigger and sync with Locomotive Scroll
scroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(main, {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // Locomotive uses "transform" for its smooth scrolling, so we update it here
    pinType: main.style.transform ? "transform" : "fixed"
});

// Basic GSAP animation with ScrollTrigger
gsap.to(".boxx1", {
    x: "-100vh",
    scrollTrigger: {
        trigger: ".boxx1",
        scroller: main, // Use the main container as the scroller
        start: "top 50%",
        end: "top 0%",
        scrub: true,
        markers: true
    }
});

gsap.to(".boxx2", {
    x: "100vh",
    scrollTrigger: {
        trigger: ".boxx2",
        scroller: main,
        start: "top 50%",
        end: "top 0%",
        scrub: true,
        markers: true
    }
});

// Another GSAP animation example
gsap.from(".box3", {
    scale: 0,
    rotate: 360,
    duration: 1,
    scrollTrigger: {
        trigger: ".box3",
        scroller: main,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: true
    }
});

// Refresh ScrollTrigger after Locomotive Scroll updates
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();
