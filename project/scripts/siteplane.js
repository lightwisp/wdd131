
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

// all of my recipies
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
    },
    {
        foodName: "Hot Rolls",
        ingredients: [
            "2 tbsp", "(1 pkg) yeast",
            "2 tbsp", "Sugar",
            "1/2 cup", "Powdered Milk",
            "2 cups", "Warm Water",
            "2", "Eggs",
            "1/2 cup", "Cooking Oil",
            "1/2 cup", "Sugar",
            "1 1/2 tsp", "Salt",
            "~6 cups", "Flour",
            "", "Butter"
        ],
        directions: [
            "Dissolve 2 tbsp sugar in 1/2 cup warm water, add yeast. When dissolved, add to other mixture.",
            "Add flour until dough is smooth and not sticky. Let raise until double, then they can be rolled into any shape desired.",
            "Place a piece of butter and fold dough over so it's in the middle. Let rise again.",
            "Bake at 350° for about 15–20 min."
        ],
        image: "images/hot-rolls.webp",
        type: "dessert"
    },
    {
        foodName: "Peanut Butter Blossoms",
        ingredients: ["1 cup", "Sugar", "1 cup", "Brown Sugar", "1 cup", "Butter", "1 cup", "Creamy Peanut Butter",
            "2", "Egges","1/4 cup", "Milk", "2 tsp", "Vanilla", "3 1/2 cups", "Flower", "2 tsp", "Baking soda", "1 tsp", "Salt", "2 10oz pkg", "Candy Kisses"
        ],
        directions: ["Cream togeather sugars, butter and peanutbutter.",
             "Beat in eggs, milk, vanilla. Sift together flour, soda, and salt. Stir together in the cream bowl.",
            "Shape into balls and roll in granulated sugar.", "Bake 350° for 8 - 10 min",
             "Immediately press a chocolate kiss int each."],
        image: "images/peanut-blossoms.webp",
        type: "dessert"
    },
    {
        foodName: "",
        ingredients: [],
        directions: [],
        image: "",
        type: ""
    },
    {
        foodName: "",
        ingredients: [],
        directions: [],
        image: "",
        type: ""
    },
    {
        foodName: "",
        ingredients: [],
        directions: [],
        image: "",
        type: ""
    },
    {
        foodName: "",
        ingredients: [],
        directions: [],
        image: "",
        type: ""
    },
    {
        foodName: "",
        ingredients: [],
        directions: [],
        image: "",
        type: ""
    },
    {
        foodName: "",
        ingredients: [],
        directions: [],
        image: "",
        type: ""
    },
]
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// creation of all the recipies from my list of recipies
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
        
        // favoret button creation
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        fetch("images/bookmark-heart.svg")
        .then(response => response.text())
        .then(data => {
            let div = document.createElement("div");
            div.innerHTML = data;
            let svg = div.querySelector("svg");
            let types = recipie.type.split(" ");
            if(localStorage.getItem(recipie.foodName) === "true"){
                svg.setAttribute("fill", "red");
                svg.classList.toggle("on");
                types.push("favorite");
                recipie.type = types.join(" ")
            }

            favButton.addEventListener('click', () =>{
                svg.classList.toggle("on");
                const isFave = svg.getAttribute("fill") === "red";
    
                if (isFave){
                    svg.setAttribute("fill", "black");
                    types = types.filter(t => t !== "favorite");

                    localStorage.setItem(recipie.foodName, "false");
                }
                else{
                    svg.setAttribute("fill", "red");
                    if (!types.includes("favorite")){
                        types.push("favorite");
                    }
                    localStorage.setItem(recipie.foodName, "true");
                }
                recipie.type = types.join(" ")
            });
            favButton.appendChild(svg); // or wherever you want it
        });
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        //mobile button for expanding and colapsing
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



//set up of navagation functionalitys
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const homeLink = document.querySelector("#home");
const breakfast = document.querySelector("#breakfast");
const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
const dessert = document.querySelector("#dessert");
const favorite = document.querySelector("#favorites");
const pageTital = document.querySelector("#pageName");

createRecipies(recipies);

homeLink.addEventListener("click", () =>{
    createRecipies(recipies)
    pageTital.textContent = "Home"
})

breakfast.addEventListener("click", () => {
    const breakfastMeal = recipies.filter(recipie => {
        let mealType = recipie.type.toLowerCase().includes("breakfast")
        return mealType;
    })
    createRecipies(breakfastMeal)
    pageTital.textContent = "Breakfasts"
});


lunch.addEventListener("click", () => {
    const lunchMeal = recipies.filter(recipie => {
        let mealType = recipie.type.toLowerCase().includes("lunch")
        return mealType;
    })
    createRecipies(lunchMeal)
    pageTital.textContent = "Lunchs"
});

dinner.addEventListener("click", () => {
    const dinnerMeal = recipies.filter(recipie => {
        let mealType = recipie.type.toLowerCase().includes("dinner")
        return mealType;
    })
    createRecipies(dinnerMeal)
    pageTital.textContent = "Dinners"
});

dessert.addEventListener("click", () => {
    const dessertMeal = recipies.filter(recipie => {
        let mealType = recipie.type.toLowerCase().includes("dessert")
        return mealType;
    })
    createRecipies(dessertMeal)
    pageTital.textContent = "Desserts"
});

favorites.addEventListener("click", () => {
    const favoriteMeals = recipies.filter(r => r.type.includes("favorite"));
    createRecipies(favoriteMeals)
    pageTital.textContent = "Favorites"
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
