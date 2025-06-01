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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "London Temple",
    location: "Syrrey, England",
    dedicated: "1958, September, 8",
    area: 42652,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
  },
  {
    templeName: "Panama City Temple",
    location: "Ancon, Provincia de Panamá, Panama",
    dedicated: "2008, August, 10",
    area: 18943,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/127-Panama-City-Panama-Temple.jpg"
  },
  {
    templeName: "Kyiv Ukraine Temple",
    location: "Kyevo-Sviatoshyns'ky Rayon, Kyivs'ka Oblast",
    dedicated: "2007, June, 23",
    area: 22184,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/134-Kyiv-Ukraine-Temple.jpg"
  }
  // Add more temple objects here...
];


const container = document.querySelector(".container")
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");


createTempleCard(temples);

homeLink.addEventListener("click", () =>{
    createTempleCard(temples)
})

oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        let templeYear = parseInt(temple.dedicated.split(",")[0]);
        return templeYear <=1900;   
    })
    createTempleCard(oldTemples)   
});

newLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        let templeYear = parseInt(temple.dedicated.split(",")[0]);
        return templeYear >=2000;   
    })
    createTempleCard(newTemples)
});

largeLink.addEventListener("click", () => {
    const bigTemples = temples.filter(temple => {
        let templeArea = temple.area;
        return templeArea >= 90000;
    })
    createTempleCard(bigTemples)
});

smallLink.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => {
        let templeArea = temple.area;
        return templeArea <= 10000;
    })
    createTempleCard(smallTemples)
});

function createTempleCard(filteredTemples){
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("div")
        card.classList.add("temple-card")

        let name = document.createElement("h3")
        name.textContent = temple.templeName;

        let location = document.createElement("p")
        location.textContent = "Location: " + temple.location;

        let dedicated = document.createElement("p")
        dedicated.textContent = "Dedicated: " + temple.dedicated;

        let area = document.createElement("p")
        area.textContent = "Area: " + temple.area + " ft²";

        let img = document.createElement("img")
        img.src = temple.imageUrl;
        img.alt = temple.name;
        img.loading = "lazy"

        card.appendChild(name)
        card.appendChild(location)
        card.appendChild(dedicated)
        card.appendChild(area)
        card.appendChild(img)

        container.appendChild(card)
})
}
