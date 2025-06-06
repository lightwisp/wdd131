
const year = new Date().getFullYear();
const lastModified = document.lastModified;

const menuButton = document.querySelector(".hamburger");


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
        diretions: ["Melt butter in a large pot over medium high heat. Add onion and garlic, saute for 2 minutes until onion softens.",
            "Add broth, water, broccoli, potato, salt & pepper. Bring to simmer, then place lit on, turn heat down to medium high and cook for 20 min ir until broccoli is soft.",
            "Turn stove off (but leave on stove) Puree using a stick blender until smooth.",
            "Stir in cream, then add cheese a handful at a time, stirring in between to melt.",
            "Taste and add more seasonings if desired. Serve"
        ],
        image: "images/broccoli-soup.webp",
        type: "lunch dinner"
    },
    {

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

        let buttonImag = document.createElement("img")
        buttonImag.classList.add("button-img")
        buttonImag.src = "images/bookmark-heart.svg"
        buttonImag.loading = "lazy"

        favButton.appendChild(buttonImag);

        let name = document.createElement("h3")
        name.textContent = recipie.foodName;

        let ingredientSection = document.createElement("h4")
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
        img.loading = "lazy"

        let diretionsSection = document.createElement("h4")
        diretionsSection.textContent = "Directions:";
        
        let diretions = document.createElement("ul");
        diretions.classList.add("directionUl")
        recipie.diretions.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            diretions.appendChild(li);
        });

        

        card.appendChild(name);
        card.appendChild(ingredientSection);
        card.appendChild(ingredients);
        card.appendChild(img);
        card.appendChild(favButton);
        card.appendChild(diretionsSection);
        card.appendChild(diretions);

        recipieContainer.appendChild(card);
    }); 
}

createRecipies(recipies);