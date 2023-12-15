let pressed = false;

const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
const changeFavicon = () => {
    const favicon = document.getElementById('favicon');
    if (darkModeQuery.matches) {
        favicon.href = 'media/logo/loggi.png';
    } else {
        favicon.href = 'media/logo/image2vector.svg';
    }
};

changeFavicon();
darkModeQuery.addEventListener('change', changeFavicon);

const burger = document.querySelector('.burger');

console.log("loaded");

burger.addEventListener('click', () => {
    console.log("toggled");
    burger.classList.toggle('active');
    if (pressed == false) {
    document.getElementById('overlay').classList.remove('hidden');
    pressed = true;
    } else { 
    document.getElementById('overlay').classList.add('hidden');
    pressed = false;
    }
    
});

function closeBurger() {
    console.log("closed");
    burger.classList.toggle('active');
    document.getElementById('overlay').classList.add('hidden');
    pressed = false;
}
