const currentTemp = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const windChill = document.querySelector('#windChill')

let temperature = 10
let windSpeed = 5
let conditions = "Partly Cloudy"

currentTemp.textContent = `${temperature}°C`;
wind.textContent = `${windSpeed} Km/h`;

function calculateWindChill(temperature, windSpeed){
    if (temperature <= 10 && windSpeed > 4.8) {
        return (
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(1) + " °C";
    } else {
        return "N/A";
    }   
}

windChill.textContent = calculateWindChill(temperature, windSpeed);
