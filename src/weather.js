import { jsonObject } from './script.js';

function fahrenheitToCelsius(tempF) {
    degreesCelsius = (tempF - 32) * (5/9);
    return degreesCelsius;
}

export function loadWeatherPage() {
    const siteBody = document.getElementById('site-body');
    siteBody.innerHTML = '';

    const weatherContainer = document.createElement('div');
    weatherContainer.id = 'weather-container';
    siteBody.appendChild(weatherContainer);

    const currentWeatherPanel = document.createElement('div');
    currentWeatherPanel.id = 'current-weather-panel';
    currentWeatherPanel.innerHTML = `${jsonObject.resolvedAddress}<br>`;
    currentWeatherPanel.innerHTML += `${jsonObject.days[0].datetime}<br>`;
    currentWeatherPanel.innerHTML += `${jsonObject.currentConditions.temp} °F<br>`;
    currentWeatherPanel.innerHTML += `${jsonObject.days[0].tempmin} °F - ${jsonObject.days[0].tempmax} °F`;
    weatherContainer.appendChild(currentWeatherPanel);

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
}
