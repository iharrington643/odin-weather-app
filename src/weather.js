import { jsonObject } from './script.js';
import clearDay from './images/clear-day.png';
import clearNight from './images/clear-night.png';
import cloudy from './images/cloudy.png';
import fog from './images/fog.png';
import partlyCloudyDay from './images/partly-cloudy-day.png';
import partlyCloudyNight from './images/partly-cloudy-night.png';
import rain from './images/rain.png';
import snow from './images/snow.png';
import wind from './images/wind.png';

let temperatureUnit = '°F';

function fahrenheitToCelsius(tempF) {
    let degreesCelsius = (tempF - 32) * (5/9);
    return degreesCelsius.toFixed(1);
};

export function loadWeatherPage() {
    const unitToggle = document.createElement('div');
    unitToggle.classList.add('unit-toggle');
    document.body.appendChild(unitToggle);

    const toggleButton = document.createElement('button');
    toggleButton.classList.add('toggle-button');
    toggleButton.innerHTML = `${temperatureUnit}`;
    unitToggle.appendChild(toggleButton);

    const siteBody = document.getElementById('site-body');
    siteBody.innerHTML = '';

    const weatherContainer = document.createElement('div');
    weatherContainer.id = 'weather-container';
    siteBody.appendChild(weatherContainer);

    const currentWeatherPanel = document.createElement('div');
    currentWeatherPanel.id = 'current-weather-panel';
    weatherContainer.appendChild(currentWeatherPanel);

    const currentWeatherIcon = document.createElement('img');
    currentWeatherIcon.id = 'current-weather-icon';
    currentWeatherIcon.src = cloudy;
    currentWeatherIcon.classList.add('weather-icon');
    currentWeatherPanel.appendChild(currentWeatherIcon);

    const currentWeatherText = document.createElement('p');
    currentWeatherText.id = 'current-weather-text';
    currentWeatherPanel.appendChild(currentWeatherText);

    const weeklyWeatherContainer = document.createElement('div');
    weeklyWeatherContainer.id = 'weekly-weather-container';
    weatherContainer.appendChild(weeklyWeatherContainer);

    const weatherOne = document.createElement('div');
    weatherOne.id = 'weather-one';
    weatherOne.classList.add('weather-panel');
    weeklyWeatherContainer.appendChild(weatherOne);

    const weatherTwo = document.createElement('div');
    weatherTwo.id = 'weather-two';
    weatherTwo.classList.add('weather-panel');
    weeklyWeatherContainer.appendChild(weatherTwo);

    const weatherThree = document.createElement('div');
    weatherThree.id = 'weather-three';
    weatherThree.classList.add('weather-panel');
    weeklyWeatherContainer.appendChild(weatherThree);

    const weatherFour = document.createElement('div');
    weatherFour.id = 'weather-four';
    weatherFour.classList.add('weather-panel');
    weeklyWeatherContainer.appendChild(weatherFour);

    const weatherFive = document.createElement('div');
    weatherFive.id = 'weather-five';
    weatherFive.classList.add('weather-panel');
    weeklyWeatherContainer.appendChild(weatherFive);

    function loadCurrentTextContent(unit) {
        let temperature = jsonObject.currentConditions.temp;
        let minTemp = jsonObject.days[0].tempmin;
        let maxTemp = jsonObject.days[0].tempmax;

        if (temperatureUnit == '°C') {
            temperature = fahrenheitToCelsius(temperature);
            minTemp = fahrenheitToCelsius(minTemp);
            maxTemp = fahrenheitToCelsius(maxTemp);
        }

        currentWeatherText.innerHTML = `${jsonObject.address}<br>`;
        currentWeatherText.innerHTML += `${jsonObject.days[0].datetime}<br>`;
        currentWeatherText.innerHTML += `${temperature} ${unit}<br>`;
        currentWeatherText.innerHTML += `${minTemp} ${unit} - ${maxTemp} ${unit}`;
    }

    function loadCurrentIcon(icon1) {
        if (icon1 == 'clear-day') {
            currentWeatherIcon.src = clearDay;
        } else if (icon1 == 'clear-night') {
            currentWeatherIcon.src = clearNight;
        } else if (icon1 == 'cloudy') {
            currentWeatherIcon.src = cloudy;
        } else if (icon1 == 'fog') {
            currentWeatherIcon.src = fog;
        } else if (icon1 == 'partly-cloudy-day') {
            currentWeatherIcon.src = partlyCloudyDay;
        } else if (icon1 == 'partly-cloudy-night') {
            currentWeatherIcon.src = partlyCloudyNight;
        } else if (icon1 == 'rain') {
            currentWeatherIcon.src = rain;
        } else if (icon1 == 'snow') {
            currentWeatherIcon.src = snow;
        } else {
            currentWeatherIcon.src = wind;
        }
    }
    
    loadCurrentIcon(jsonObject.currentConditions.icon);
    loadCurrentTextContent(temperatureUnit);

    toggleButton.addEventListener('click', function() {
        if (temperatureUnit == '°F') {
            temperatureUnit = '°C';
            unitToggle.style.justifyContent = 'flex-end';
        } else {
            temperatureUnit = '°F';
            unitToggle.style.justifyContent = 'flex-start';
        }

        toggleButton.innerHTML = `${temperatureUnit}`;
        loadCurrentTextContent(temperatureUnit);
    });
}
