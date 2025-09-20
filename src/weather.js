import { jsonObject } from './script.js';

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
    currentWeatherIcon.classList.add('weather-icon');
    currentWeatherPanel.appendChild(currentWeatherIcon);

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

    function loadTextContent(unit) {
        let temperature = jsonObject.currentConditions.temp;
        let minTemp = jsonObject.days[0].tempmin;
        let maxTemp = jsonObject.days[0].tempmax;

        if (temperatureUnit == '°C') {
            temperature = fahrenheitToCelsius(temperature);
            minTemp = fahrenheitToCelsius(minTemp);
            maxTemp = fahrenheitToCelsius(maxTemp);
        }

        currentWeatherPanel.innerHTML = `${jsonObject.resolvedAddress}<br>`;
        currentWeatherPanel.innerHTML += `${jsonObject.days[0].datetime}<br>`;
        currentWeatherPanel.innerHTML += `${temperature} ${unit}<br>`;
        currentWeatherPanel.innerHTML += `${minTemp} ${unit} - ${maxTemp} ${unit}`;
    }

    function loadIcons(icon) {
        currentWeatherIcon.src = `./images/${icon}`;
    }

    loadIcons(jsonObject.currentConditions.icon);
    loadTextContent(temperatureUnit);

    toggleButton.addEventListener('click', function() {
        if (temperatureUnit == '°F') {
            temperatureUnit = '°C';
            unitToggle.style.justifyContent = 'flex-end';
        } else {
            temperatureUnit = '°F';
            unitToggle.style.justifyContent = 'flex-start';
        }

        toggleButton.innerHTML = `${temperatureUnit}`;
        loadTextContent(temperatureUnit);
    });
}
