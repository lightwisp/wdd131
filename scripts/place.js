const year = new Date().getFullYear();
const lastModified = document.lastModified;


const tempC = 9;
const weather = "Cloudy"
const windKmh = 26;

const windChill = document.getElementById("windchill-label");
const wind = document.getElementById("wind-label");
const temp = document.getElementById("temperature-label");
const condition = document.getElementById("conditions-label")

temp.innerText = tempC;
condition.innerText = weather;
wind.innerText = windKmh;

document.getElementById("year").innerHTML = year;
document.getElementById("lastModified").innerHTML = lastModified;

// calculating wind chill temp
function calculateWindChill(tempC, windKmh){
    const windChill = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
    return Math.round(windChill * 10) /10
};

// check if its cold enough for a wind chill
if (tempC <= 10 || windKmh > 4.8) {
    windChill.textContent = calculateWindChill(tempC, windKmh) + "°C";
}else{
    windChill.textContent = "N/A";
};