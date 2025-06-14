
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
        foodName: "Waffles",
        ingredients: [
            "2 cups", "Flour",
            "1 tbsp", "Baking Powder",
            "1/2 tsp", "Salt",
            "2", "Eggs (separated, whites and yolks)",
            "1 1/4 cups", "Milk",
            "1/2 cup", "Oil"
        ],
        directions: [
            "Mix dry ingredients together.",
            "Beat egg whites until stiff peaks form.",
            "Mix together flour mixture with yolks, milk, and oil.",
            "Fold in egg whites.",
            "Cook in waffle iron and enjoy."
        ],
        image: "images/waffles.webp",
        type: "breakfast"
    },
    {
        foodName: "Creamy Pesto Pasta",
        ingredients: [
            "1/2 pound", "Pasta",
            "3 tablespoons", "Salted Butter",
            "4 cloves", "Garlic",
            "1 cup", "Heavy Cream",
            "1/2 cup", "Milk",
            "1/4 cup", "Pesto",
            "1/3 cup", "Grated Parmesan Cheese",
        ],
        directions: [
            "Boil water and season with salt. Cook pasta according to box's instructions.",
            "Heat large skillet over medium-low heat. Add the butter and garlic. Cook for 30–60 seconds until garlic is fragrant.",
            "Pour in heavy cream, milk and pesto. Stir and cook for 1 minute to warm through.",
            "Turn heat to low, then add parmesan cheese. Stir until melted.",
            "Put cooked pasta in sauce, combine. Add pasta water if sauce needs to be thinned out.",
            "Serve warm."
        ],
        image: "images/creamy-pesto-pasta.webp",
        type: "lunch dinner"
    },
    {
        foodName: "Golden Nuggets",
        ingredients: [
            "1", "Whole Chicken Breast",
            "Some", "Vegetable Oil (for frying)",
            "1/3 cup", "All-Purpose Flour",
            "1/4 tsp", "Salt",
            "1 1/2 tsp", "Vinegar",
            "1/4 tsp", "Baking Soda",
            "1/3 cup", "Water"
        ],
        directions: [
            "Cut chicken into 1 to 1/2 inch pieces.",
            "Heat 2–3 inches of oil in a deep fryer or pan.",
            "Mix flour and salt in a bowl.",
            "In a separate bowl, mix vinegar and baking soda, then stir in water.",
            "Combine the vinegar mixture with the flour mixture and beat until smooth.",
            "Dip chicken pieces into batter, allowing excess to drip off.",
            "Fry chicken in hot oil in a single layer, turning once, until golden brown and cooked through."
        ],
        image: "images/golden-nuggets.webp",
        type: "lunch"
    },
    {
        foodName: "Marry Me Chicken",
        ingredients: [
            "3", "Large Chicken Breasts (sliced into thin cutlets)",
            "1/2 tsp", "Salt",
            "1/4 tsp", "Black Pepper",
            "6 tbsp", "All-Purpose Flour",
            "2 tbsp", "Olive Oil",
            "2 tbsp", "Unsalted Butter",
            "3 cloves", "Garlic (minced)",
            "1 cup", "Chicken Stock",
            "1 cup", "Heavy Cream",
            "1/2 cup", "Parmesan Cheese (grated)",
            "1 tsp", "Chili Flakes",
            "1/4 tsp", "Oregano",
            "1/4 tsp", "Thyme",
            "1/3 cup", "Sundried Tomatoes (chopped)",
            "1 tbsp", "Fresh Basil Leaves"
        ],
        directions: [
            "Season chicken with salt and pepper, then dredge in flour and shake off any excess.",
            "In a large skillet, heat olive oil and melt the butter on medium heat. Swirl pan to coat evenly.",
            "Brown the chicken for 4–5 minutes on each side or until golden brown and cooked through. Transfer to a plate, cover, and set aside.",
            "Sauté the garlic for a minute or until fragrant. Add the chicken stock and deglaze the pan, scraping any bits stuck to the bottom.",
            "Turn heat to medium-low, add heavy cream and parmesan cheese. Let the sauce simmer for a couple of minutes.",
            "Season with chili flakes, thyme, and oregano. Add salt and pepper to taste.",
            "Add the sundried tomatoes and return the chicken to the pan. Let the sauce simmer and thicken for a few more minutes.",
            "Garnish with chopped fresh basil leaves and serve warm over pasta, rice, or potatoes."
        ],
        image: "images/marry-me-chicken.webp",
        type: "dinner"
    },
    {
        foodName: "The Best Funeral Potatoes",
        ingredients: [
            "1 tbsp", "Butter",
            "1", "Medium Onion (diced)",
            "2 lbs", "Diced Hash Browns (not the grated kind)",
            "1/2 cup", "Butter (melted)",
            "21.5 oz", "Cream of Chicken Soup (two 10.75 oz cans)",
            "2 cups", "Sour Cream",
            "3 cups", "Grated Cheddar Cheese",
            "3 cups", "Crushed Corn Flakes",
            "2 tbsp", "Butter (melted)"
        ],
        directions: [
            "Preheat oven to 350°F.",
            "Sauté onion in 1 tbsp butter until translucent in a medium skillet.",
            "While onion is cooking, in a large bowl, mix frozen hash browns, melted butter, cream of chicken soup, sour cream, grated cheese, and salt & pepper until combined.",
            "Stir in onion and pour mixture into a greased 9x13 casserole dish.",
            "Melt the remaining 2 tbsp butter in the skillet. Add crushed cornflakes and stir to toast for about 1 minute.",
            "Sprinkle toasted cornflakes over the top of the casserole.",
            "Bake for 40–45 minutes or until hot and bubbly. Serve hot."
        ],
        image: "images/funeral-potatoes.webp",
        type: "lunch"
    },
    {
        foodName: "Mexican Lasagna",
        ingredients: [
            "2 lbs", "Beef",
            "1 can (16 oz)", "Refried Beans",
            "1 can (4 oz)", "Chopped Green Chilies",
            "1 envelope", "Taco Seasoning",
            "2 tbsp", "Hot Salsa (optional)",
            "12 oz", "Uncooked Lasagna Noodles",
            "4 cups (16 oz)", "Shredded Colby Monterey Jack Cheese (divided)",
            "1 jar (16 oz)", "Mild Salsa",
            "2 cups", "Water",
            "2 cups", "Sour Cream",
            "1 can (2 1/4 oz)", "Sliced Olives (drained)",
            "3", "Green Onions (chopped)",
            "1", "Medium Tomato (chopped)"
        ],
        directions: [
            "Preheat oven to 350°F.",
            "In a large skillet, cook beef over medium heat until no longer pink. Drain.",
            "Stir in refried beans, green chilies, taco seasoning, and hot salsa.",
            "In a greased 13x9 inch baking dish, layer a third of the uncooked noodles and a third of the meat mixture. Sprinkle with 1 cup of cheese.",
            "Repeat the layers two more times.",
            "Combine mild salsa and water, then pour evenly over the top of the lasagna.",
            "Cover with foil and bake for 1 hour or until heated through.",
            "Top with sour cream, sliced olives, chopped green onions, chopped tomato, and remaining cheese.",
            "Bake uncovered for 5 minutes, then let stand for 10–15 minutes before serving."
        ],
        image: "images/mexican-lasagna.webp",
        type: "dinner"
    },
    {
        foodName: "Snickerdoodles",
        ingredients: [
            "2 1/2 cups", "All-Purpose Flour",
            "2 tsp", "Cream of Tartar",
            "1 tsp", "Baking Soda",
            "1/2 tsp", "Salt",
            "1 1/2 cups", "Sugar",
            "8 tbsp", "Unsalted Butter (softened)",
            "8 tbsp", "Vegetable Shortening",
            "2", "Large Eggs",
            "Splash", "Vanilla (optional)",
            // Cinnamon Sugar Topping
            "1/4 cup", "Sugar",
            "1 tbsp", "Ground Cinnamon"
        ],
        directions: [
            "Adjust oven rack to middle position and preheat to 375°F. Line 2 baking sheets with parchment paper.",
            "Combine 1/4 cup sugar and cinnamon in a shallow dish for topping.",
            "In a bowl, whisk together flour, cream of tartar, baking soda, and salt.",
            "Using a stand mixer, beat butter, shortening, and 1 1/2 cups sugar on medium speed until light and fluffy (3–6 minutes).",
            "Add eggs one at a time, beating until incorporated (about 30 seconds each), scraping down bowl as needed.",
            "Reduce mixer speed to low and slowly add flour mixture, beating just until combined (about 30 seconds). Give dough a final stir by hand to eliminate any flour pockets.",
            "Working with 2 tablespoons of dough at a time, roll into balls. Roll each ball in cinnamon sugar and place 2\" apart on prepared baking sheets.",
            "Bake one sheet at a time for 10–12 minutes, until cookie edges are set and just beginning to brown. Centers will still look soft and puffy.",
            "Let cookies cool on baking sheet for 10 minutes, then transfer to a wire rack to cool completely."
        ],
        image: "images/snickerdoodles.webp",
        type: "dessert"
    },
    {
        foodName: "Kallista's Lemon Sugar Cookies",
        ingredients: [
            "1/2 cup", "Butter (softened)",
            "1 cup", "Sugar",
            "1/2 tsp", "Vanilla (plus a little bit more)",
            "1", "Egg",
            "1 tsp", "Lemon Zest",
            "1 tbsp", "Fresh Lemon Juice",
            "1/4 tsp", "Salt",
            "1/8 tsp", "Baking Soda",
            "1/4 tsp", "Baking Powder",
            "1 1/2 cups", "Flour",

            // For rolling
            "1/2 cup", "Powdered Sugar"
        ],
        directions: [
            "In a bowl, whip butter and sugar until fluffy.",
            "Add vanilla, egg, lemon zest, and lemon juice. Mix together.",
            "Add salt, baking soda, baking powder, and flour. Mix until combined.",
            "Roll a heaping teaspoon of dough into a ball and roll in powdered sugar.",
            "Bake at 350°F for 9–11 minutes."
        ],
        image: "images/lemmon-sugar-cookie.webp",
        type: "dessert"
    },
    {
        foodName: "Key Lime Pie",
        ingredients: [
            "3 cans", "Sweetened Condensed Milk",
            "1 1/4 cups", "Sour Cream",
            "1 1/2 cups", "Key Lime Juice",
            "2", "9-inch Graham Cracker Crusts"
        ],
        directions: [
            "Combine all ingredients together in a bowl.",
            "Pour the mixture evenly into the two pie crusts.",
            "Bake at 350°F for 8 minutes.",
            "Place in the refrigerator to help set the pie before serving."
        ],
        image: "images/key-lime-pie.webp",
        type: "dessert"
    },
    {
        foodName: "Caramel Corn",
        ingredients: [
            "27", "Large Marshmallows",
            "2 cups", "Brown Sugar (not packed)",
            "1/4 cup", "Light Corn Syrup",
            "1 cup", "Butter",
            "1 tsp", "Vanilla Extract",
            "2 (3.5 oz)", "Microwave Popcorn (popped)"
        ],
        directions: [
            "Melt butter over the stove, then add brown sugar.",
            "Add corn syrup and vanilla, stir until well combined.",
            "Add marshmallows and stir until they are fully dissolved.",
            "Pour mixture over popped popcorn and stir to coat.",
            "Make sure to shape them while warm if forming into clusters or balls."
        ],
        image: "images/carmel-corn.webp",
        type: "dessert"
    },
    {
        foodName: "Sayer's Favorite Chicken Noodle Soup",
        ingredients: [
            "12 cups", "Water",
            "1", "Rotisserie Chicken (shredded) OR 4 Chicken Breasts OR 2 Cans Shredded Chicken",
            "6 cubes", "Chicken Bouillon",
            "2 cups", "Carrots",
            "1 tsp", "Minced Garlic",
            "6 oz", "Wide Egg Noodles",
            "2 cans (10.5 oz each)", "Turkey Gravy",
            "", "Cornstarch (as needed)",
            "", "Salt & Pepper (to taste)"
        ],
        directions: [
            "Add water, chicken, bouillon, carrots, garlic, and turkey gravy to a large pot and bring to a boil.",
            "Simmer for 30 minutes until carrots are soft.",
            "Add noodles and simmer until they are tender.",
            "Thicken with cornstarch if desired, and season with salt and pepper to taste."
        ],
        image: "images/chicken_noodle_soup.webp",
        type: "lunch dinner"
    },
    {
        foodName: "Grandpa Hall's Chili",
        ingredients: [
            "2 lbs", "Ground Beef",
            "2 cups", "Ketchup",
            "2 cups", "Water",
            "1 (29 oz) can", "Diced Tomatoes",
            "2 (15 oz) cans", "Red Kidney Beans (drained)",
            "2 (15 oz) cans", "Pinto Beans (drained)",
            "1 1/2 cups", "Medium-Large Onion (chopped)",
            "1/2 cup", "Diced Green Bell Pepper",
            "1/4 cup", "Chili Powder",
            "1 1/2 tsp", "Minced Garlic",
            "1 tsp", "Ground Cumin",
            "1 tsp", "Salt",
            "1 tsp", "Black Pepper",
            "1/2 tsp", "Oregano",
            "1 tbsp", "Brown Sugar",
            "1/4 tsp", "Cayenne Pepper"
        ],
        directions: [
            "Brown the ground beef in a skillet and drain the fat.",
            "Add all ingredients to a 6-quart pot.",
            "Cover the pot and simmer for 2 hours, stirring every 15 minutes."
        ],
        image: "images/chili.webp",
        type: "dinner"
    },
    {
        foodName: "Kyle's Favorite Angel Hair Pasta",
        ingredients: [
            "2 tbsp", "Olive Oil",
            "2", "Skinless Boneless Chicken Breasts (cut into 1-inch cubes)",
            "1", "Carrot (sliced)",
            "10 oz", "Broccoli Florets (fresh or thawed if frozen)",
            "1 tsp", "Minced Garlic",
            "12 oz", "Angel Hair Pasta",
            "1 tsp", "Basil",
            "2/3 cup", "Chicken Broth",
            "1/4 cup", "Grated Parmesan Cheese"
        ],
        directions: [
            "Heat 1 tbsp oil in a skillet over medium heat. Add chicken cubes and cook until fully cooked, about 5 minutes. Remove and drain on a paper towel.",
            "Heat remaining oil in the same skillet. Meanwhile, begin to heat water for pasta in a separate saucepan.",
            "Add carrot to the skillet and cook, stirring, for 4 minutes. Add broccoli and garlic; cook for 2 more minutes.",
            "Cook pasta according to package directions.",
            "While pasta is cooking, add chicken broth, basil, and parmesan to the skillet. Stir to combine. Return chicken to skillet and reduce heat. Simmer for 4 minutes.",
            "Drain pasta. Place in a large serving bowl and top with chicken and vegetable mixture. Serve immediately."
        ],
        image: "images/kyles-angel-hair-pasta.webp",
        type: "dinner"
    },
    {
        foodName: "Hall's Spicy Sausage Pasta",
        ingredients: [
            "1 tbsp", "Olive Oil",
            "1 lb", "Smoked Sausage",
            "1.5 cups", "Diced Onion",
            "2 cloves", "Garlic (minced)",
            "2 cups", "Low-Sodium Chicken Broth",
            "1 (10 oz) can", "Ro-Tel Tomatoes and Green Chiles (Mild)",
            "1/2 cup", "Heavy Cream",
            "8 oz", "Penne Pasta",
            "1/2 tsp", "Salt",
            "1/2 tsp", "Pepper",
            "1 cup", "Monterey Jack Cheese (shredded)",
            "1/3 cup", "Thinly Sliced Scallions"
        ],
        directions: [
            "Add olive oil to an oven-safe skillet over medium-high heat until just smoking.",
            "Add sausage and onions and cook until lightly browned, about 4 minutes.",
            "Add garlic and cook until fragrant, about 30 seconds.",
            "Add broth, tomatoes, cream, pasta, salt, and pepper. Stir and bring to a boil.",
            "Cover skillet and reduce heat to medium-low. Simmer until pasta is tender, about 15 minutes.",
            "Remove skillet from heat and stir in 1/2 cup of the cheese.",
            "Top with remaining cheese and sprinkle with scallions.",
            "Broil until cheese is melted, spotty brown, and bubbly."
        ],
        image: "images/spicy-sausage-pasta.webp",
        type: "dinner"
    },
    {
        foodName: "Sayer's German Pancakes",
        ingredients: [
            "9", "Eggs",
            "1 1/2 cups", "Flour",
            "1 1/2 cups", "Milk",
            "3/4 tsp", "Salt",
            "8 tbsp", "Butter"
        ],
        directions: [
            "Place butter in a 9x13 pan and set it in the oven while preheating to 400°F.",
            "Meanwhile, mix eggs, flour, milk, and salt together. Beat until smooth, about 3 minutes.",
            "Remove pan from oven and rotate until butter has completely melted.",
            "Pour batter into the hot buttered pan immediately.",
            "Bake on the lowest oven shelf for 30 minutes."
        ],
        image: "images/german-pancakes.webp",
        type: "breakfast"
    },
    {
        foodName: "Potato Ham Chowder",
        ingredients: [
            "4", "Large Potatoes (peeled and diced)",
            "2 tbsp", "Butter",
            "1/4 cup", "Chopped Onion",
            "1/4 cup", "Chopped Green Pepper",
            "2 cups", "Water",
            "1 tsp", "Salt",
            "1/4 tsp", "Parsley",
            "1 tbsp", "Flour",
            "2 cups", "Milk",
            "1 can (12 oz)", "Whole Kernel Corn",
            "2 cups", "Cooked Ham (diced)",
            "1/4 tsp", "Paprika"
        ],
        directions: [
            "In a large saucepan, melt butter. Add onions and green pepper. Sauté until tender.",
            "Add potatoes, water, and seasonings. Cover and simmer until potatoes are tender.",
            "Make a paste of flour and 1/3 cup water. Add paste to potato mixture. Add milk and cook until slightly thickened, stirring constantly.",
            "Stir in corn and ham. Heat thoroughly and serve."
        ],
        image: "images/potato-ham-chowder.webp",
        type: "lunch"
    },
    {
        foodName: "Chicken Pie",
        ingredients: [
            "4", "9-inch Deep Dish Frozen Pie Shells (thawed)",
            "3", "Boneless Skinless Chicken Breasts",
            "1/2 cup", "Sliced Carrots",
            "3 cans", "Cream of Chicken or Cream of Mushroom Soup (you can mix them)",
            "1", "Medium Potato",
            "1 (8 oz) pkg", "Frozen Peas",
            "1", "Medium Onion",
            "3/4 cup", "Celery (diced)",
            "", "Salt and Pepper to taste"
        ],
        directions: [
            "Boil chicken until done, then cube or shred. While cooking chicken, cut vegetables into small pieces.",
            "In a large bowl, add peas, soup, salt, pepper, and chicken. Stir together.",
            "Pour mixture evenly into 2 pie shells.",
            "Take other 2 pie shells and remove from pans to use as top crusts. Seal edges and cut 6–8 slits in top.",
            "Bake on bottom rack at 400°F for 1 hour, until crust is golden brown."
        ],
        image: "images/chicken-pie.webp",
        type: "lunch dinner"
    },
    {
        foodName: "Sweet and Sour Chicken",
        ingredients: [
            // Sauce
            "1/2 cup", "Vinegar",
            "1 tbsp", "Soy Sauce",
            "3/4 cup", "Brown Sugar",
            "1/2 cup", "Chicken Broth",
            "4–5 tbsp", "Ketchup",

            // Chicken
            "3–4", "Boneless Skinless Chicken Breasts",
            "", "Garlic Salt or Powder (for sprinkling)",
            "2", "Eggs (beaten)",
            "", "Cornstarch (for dredging)"
        ],
        directions: [
            "Sprinkle chicken breasts with garlic salt or powder. Let stand for 1 hour.",
            "Beat eggs. Dip chicken in eggs then dredge in cornstarch.",
            "Brown chicken in a skillet. Place browned chicken in a casserole dish.",
            "Pour sauce over chicken.",
            "Bake at 325°F for 1 hour. Serve with rice."
        ],
        image: "images/sweet-sour-chicken.webp",
        type: "lunch dinner"
    },
    {
        foodName: "Fried Rice",
        ingredients: [
            "1 med. pot", "Cooked Rice (cold)",
            "1 cup", "Diced Cooked Ham, Bacon, Chicken, Pork, Shrimp, Crab, or Crumbled Bacon",
            "1 cup", "Chopped Vegetables: (onions, green pepper, mushrooms, water chestnuts, celery, or Bamboo Shoots",
            "3–4 tbsp", "Cooking Oil",
            "2–3", "Beaten Eggs (optional)",
            "2–4 tbsp", "Soy Sauce"
        ],
        directions: [
            "Sauté vegetables in oil until partially cooked. If eggs are to be used, push vegetables to one side and fry eggs until firm and broken into small chunks.",
            "Add seasonings, rice, and meat. Mix thoroughly until heated.",
            "Serve with soy sauce or as desired. Cold rice absorbs less oil when cooking.",
            "Note: Partially cooked vegetables are best. Anything can go into it. This is a great way to use leftovers and clean out the refrigerator!"
        ],
        image: "images/fried-rice.webp",
        type: "lunch dinner"
    },
    {
        foodName: "Gran's Pancakes",
        ingredients: [
            "2 cups", "Flour",
            "2 cups", "Milk",
            "2", "Eggs",
            "1 tsp", "Salt",
            "2 tsp", "Sugar",
            "3 tsp", "Baking Powder",
            "4 tbsp", "Oil"
        ],
        directions: [
            "Mix all ingredients together in a bowl.",
            "Spoon onto a hot skillet heated to 350°F.",
            "Flip pancakes when bubbles appear on the surface.",
            "Serve with syrup, strawberries, whipped cream, or powdered sugar.",
            "Enjoy your homemade pancakes!"
        ],
        image: "images/pancakes.webp",
        type: "breakfast"
    }


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
