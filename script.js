// Animação de flutuação ao passar o mouse
const card = document.querySelector('.card');
card.addEventListener('mouseenter', () => {
    gsap.to(card, { y: -10, duration: 0.5, ease: "power1.inOut" });
});
card.addEventListener('mouseleave', () => {
    gsap.to(card, { y: 0, duration: 0.5, ease: "power1.inOut" });
});

// Animação para escurecer o avatar
const avatarImg = document.querySelector('.avatar-img');
card.addEventListener('mouseenter', () => {
    gsap.to(avatarImg, { filter: 'brightness(50%)', duration: 0.5 });
});
card.addEventListener('mouseleave', () => {
    gsap.to(avatarImg, { filter: 'brightness(100%)', duration: 0.5 });
});