let apiKey = 'b68961c82013b3013458dcf0ec8a3c4d';
let apiUrl = 'https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid={API key}'; // This API is used to get the current weather data based on latitude and longitude.
let longlatAPI = 'http://api.openweathermap.org/geo/1.0/direct?q={state}&limit=5&appid={API key}'; // This API is used to get the latitude
//  and longitude of a city based on its name.

// Type in the city name.
// Clicking the button.
// Getting the response (viewing their weather details).

// Getting the latitude and longitude of the city.
// Getting the current weather conditions based on the latitude and longitude.


const searchIcon = document.getElementById('search-icon');
const cityInput = document.querySelector('.search-box input');
const temperature = document.getElementById('temperature');
const cityName = document.getElementById('cityName');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const temp = document.getElementById('temperature');
const humid = document.getElementById('humidity');
const wSpeed = document.getElementById('wind-speed')
const icon = document.getElementById("icon")


function searchCity() {
    const city = cityInput.value.trim();
    if (city === '' || !city) {
        alert('Please enter a city name.');
        return;
    } else {
        cityName.textContent = city;
    }
    let trimcity = city.trim();
    getDetails(trimcity);
}

searchIcon.addEventListener('click', searchCity);

async function getDetails(city) {
    const searchCity = city
    try {
        // const response = await fetch(longlatAPI.replace('{state}', searchCity).replace('{API key}', apiKey)); 
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${searchCity}&limit=5&appid=${apiKey}`);
        console.log(response)
        const data = await response.json()
        console.log(data)
        displayData(data)
    }
    catch (error) {

    }
}

function displayData(data) {
    temp.textContent = "Temperature: " + data.main.temp + "°C"
    humid.textContent = "Humidity: " + data.main.humidity + "%"
    wSpeed.textContent = "Windspeed: " + data.wind.speed + "mp/h"
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


}





