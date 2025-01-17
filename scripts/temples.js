const year = new Date().getFullYear()
const lastModified = document.lastModified
const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".navigation")
const width = window.innerWidth


document.getElementById("year").textContent = year;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburger.classList.toggle("inactive");

    if (hamburger.classList.contains("active")) {
        nav.style.display = "flex"; 
    } else {
        nav.style.display = "none"; 
    }
    console.log(width);
    
});
if(hamburger.classList.contains("")){
    nav.style.display= "flex";
}