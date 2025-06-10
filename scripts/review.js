
const displayRewiew = document.getElementById("reviews-submitted")
const displayCase = document.createElement("p");
const reviews = localStorage.getItem("count")

displayCase.innerHTML = `Number of Reviews: ${reviews}`;

displayRewiew.appendChild(displayCase);



