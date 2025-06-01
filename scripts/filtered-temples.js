const year = new Date().getFullYear();
const lastModified = document.lastModified;
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.main-nav')

document.getElementById("year").innerHTML = year
document.getElementById("lastModified").innerHTML = lastModified

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    if (hamburger.textContent === '☰'){
        hamburger.textContent = 'X'
    }
    else{
        hamburger.textContent = '☰'
    }
});