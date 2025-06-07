
const year = new Date().getFullYear();
const lastModified = document.lastModified;


document.getElementById("year").innerHTML = year
document.getElementById("lastModified").innerHTML = 'Last Modification: ' + lastModified;