gsap.registerPlugin(ScrollTrigger); // 

// these two lines below use gsap.from()
gsap.from(".title", { y: -50, opacity: 0, duration: 1 });
gsap.from(".subtitle", { y: 50, opacity: 0, duration: 1, delay: 0.3 });

const box = document.querySelector(".box");
box.addEventListener("mouseenter", () => {
    // this is the gsap.to function that rotates the box to the right and enlarges the box when the mouse is on the box
    gsap.to(box, { rotation: 360, scale: 1.2, duration: 1 });
});
box.addEventListener("mouseleave", () => {
    // this is the gsap.to function that unrotates and unenlarges the box when the mouse leaves the box
    gsap.to(box, { rotation: 0, scale: 1, duration: 1 });
});

// scrollTrigger is a special GSAP plugin (we activated it above) that animates elements when they are scrolled to
gsap.to(".card", {
    scrollTrigger: ".card",
    y: 0, // the card's y-position will animate when scrolled down to
    opacity: 1, // the card's opacity will animate when scrolled down to
    duration: 1
});

// animates the navbar to have a slow fade in and fade out when the mouse hovers over the text
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        gsap.to(link, { color: "#ff8bc3ff", duration: 0.3 });
        // also uses gsap.to() like the rotating box
    });
    link.addEventListener("mouseleave", () => {
        gsap.to(link, { color: "#fff", duration: 0.3 });
    });
});
