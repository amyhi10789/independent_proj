gsap.registerPlugin(ScrollTrigger);

gsap.from(".title", { y: -50, opacity: 0, duration: 1 });
gsap.from(".subtitle", { y: 50, opacity: 0, duration: 1, delay: 0.3 });

const box = document.querySelector(".box");
box.addEventListener("mouseenter", () => {
    gsap.to(box, { rotation: 360, scale: 1.2, duration: 1 });
});
box.addEventListener("mouseleave", () => {
    gsap.to(box, { rotation: 0, scale: 1, duration: 1 });
});

gsap.to(".card", {
    scrollTrigger: ".card",
    y: 0,
    opacity: 1,
    duration: 1
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        gsap.to(link, { color: "#00ff99", duration: 0.3 });
    });
    link.addEventListener("mouseleave", () => {
        gsap.to(link, { color: "#fff", duration: 0.3 });
    });
});
