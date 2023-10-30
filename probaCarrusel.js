document.querySelector('.scroll-container').addEventListener('mouseenter', function () {
    this.querySelector('.scroll-content').style.animationPlayState = 'paused';
});

document.querySelector('.scroll-container').addEventListener('mouseleave', function () {
    this.querySelector('.scroll-content').style.animationPlayState = 'running';
});
