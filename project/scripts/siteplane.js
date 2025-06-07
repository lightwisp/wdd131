
const year = new Date().getFullYear();
const lastModified = document.lastModified;
const nav = document.querySelector(".nav-box");
const menuButton = document.querySelector(".hamburger");
const heartButton = document.querySelector(".fav-button");
const menuImage = document.querySelector(".icon");
menuButton.addEventListener('click', () =>{
    nav.classList.toggle("toggled")
    if (menuImage.src.includes("images/list.svg")){
        menuImage.src = "images/three-dots.svg"; 
        nav.classList.remove("animated")
    }
    else{
        menuImage.src = "images/list.svg";
        
    }
});
nav.addEventListener("animationend", (e) =>{
    if (e.animationName === "fallUp") {
        nav.classList.toggle("animated")
    }
});

document.getElementById("year").innerHTML = year
document.getElementById("lastModified").innerHTML = lastModified

const recipieContainer = document.querySelector(".recipie-container");
const recipies = [
    {
        foodName: "Broccoli Cheddar Soup",
        ingredients: ["1 tbsp", "Butter", "2", "Minced Garlic cloves", "1", "Diced Onion", "4 cups", "Chicken Broth",
            "1 1/2 cups", "Water", "1.4 lbs", "Broccoli florets", "2", "Diced Potatoes", "3/4 tsp", "Salt", "1/4 tsp", "Black Pepper",
            "1 1/2 cups", "Shredded Cheddar Cheese", "3/4 cup", "Cream"
        ],
        directions: ["Melt butter in a large pot over medium high heat. Add onion and garlic, saute for 2 minutes until onion softens.",
            "Add broth, water, broccoli, potato, salt & pepper. Bring to simmer, then place lit on, turn heat down to medium high and cook for 20 min ir until broccoli is soft.",
            "Turn stove off (but leave on stove) Puree using a stick blender until smooth.",
            "Stir in cream, then add cheese a handful at a time, stirring in between to melt.",
            "Taste and add more seasonings if desired. Serve"
        ],
        image: "images/broccoli-soup.webp",
        type: "lunch dinner"
    },
    {
        foodName: "No Bake Cookies",
        ingredients: ["2 cups", "Sugar", "1/4 cup", "Cocoa", "1/2 cup", "Butter", "1/2 cup", "Milk", 
            "3 tbsp", "Corn Syrup", "3 Cups", "Oats", "1/2 cup", "Mini Chocolate Chips"],
        directions: ["Mix sugare, cocoa, butter, milk, and corn syrup and bring them to a boil for 1 min", 
            "Pour quickly the oats and chocolate chip and mix", 
            "Drop onto parchment linded cookie sheet and wait to cool"],
        image: "images/no-bake.webp",
        type: "dessert"
    }
]

function createRecipies(filteredRecipie)
{
    recipieContainer.innerHTML = "";

    filteredRecipie.forEach(recipie => {
        let card = document.createElement("div")
        card.classList.add("recipie")

        let favButton = document.createElement("button")
        favButton.classList.add("fav-button")
        favButton.setAttribute("aria-label", "Favoret Button")

        
        let name = document.createElement("h3")
        name.textContent = recipie.foodName;
        
        let ingredientSection = document.createElement("h4")
        ingredientSection.classList.add("ingTital");
        ingredientSection.textContent = "Ingredients:";
        
        let ingredients = document.createElement("ul");
        ingredients.classList.add("listUl")
        recipie.ingredients.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            ingredients.appendChild(li);
        });
        
        let img = document.createElement("img")
        img.src = recipie.image;
        img.alt = recipie.name;
        img.loading = "lazy";
        
        let directionsSection = document.createElement("h4")
        directionsSection.classList.add("diretTital");
        directionsSection.textContent = "Directions:";
        
        let directions = document.createElement("ul");
        directions.classList.add("directionUl")
        recipie.directions.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            directions.appendChild(li);
        });
        
        
        fetch("images/bookmark-heart.svg")
        .then(response => response.text())
        .then(data => {
            let div = document.createElement("div");
            div.innerHTML = data;
            let svg = div.querySelector("svg");
            
            favButton.addEventListener('click', () =>{
                svg.classList.toggle("on")
                if (svg.getAttribute("fill") === "red"){
                    svg.setAttribute("fill", "black");
                }
                else{
                    svg.setAttribute("fill", "red");
                }
            });
            favButton.appendChild(svg); // or wherever you want it
        });

        let mobilButton = document.createElement("button")
        mobilButton.classList.add("mobilButton");
        mobilButton.textContent = "Expand";
        mobilButton.addEventListener('click', () =>{
            ingredientSection.classList.toggle("expanded");
            ingredients.classList.toggle("expandedTable");
            directionsSection.classList.toggle("expanded");
            directions.classList.toggle("expanded");
            if (ingredientSection.classList.contains("expanded")){
                mobilButton.textContent ="Colapse";
            }
            else{
                mobilButton.textContent = "Expand";
            }
            
        })
        
        card.appendChild(name);
        card.appendChild(ingredientSection);
        card.appendChild(ingredients);
        card.appendChild(img);
        card.appendChild(favButton);
        card.appendChild(directionsSection);
        card.appendChild(directions);
        card.appendChild(mobilButton)

        recipieContainer.appendChild(card);
    }); 
}

createRecipies(recipies);
