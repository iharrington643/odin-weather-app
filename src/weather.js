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

    const weatherPanels = document.getElementsByClassName('weather-panel');
    weatherPanels.forEach(weatherPanel => {
        const weatherPanelIcon = document.createElement('img');
        weatherPanelIcon.classList.add = 'weather-panel-icon';
        weatherPanel.appendChild(weatherPanelIcon);

        const weatherPanelText = document.createElement('p');
        weatherPanelText.classList.add = 'weather-panel-text';
        weatherPanel.appendChild(weatherPanelText);
    }) 

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

    function loadCurrentIcon(icon) {
        if (icon == 'clear-day') {
            currentWeatherIcon.src = clearDay;
        } else if (icon == 'clear-night') {
            currentWeatherIcon.src = clearNight;
        } else if (icon == 'cloudy') {
            currentWeatherIcon.src = cloudy;
        } else if (icon == 'fog') {
            currentWeatherIcon.src = fog;
        } else if (icon == 'partly-cloudy-day') {
            currentWeatherIcon.src = partlyCloudyDay;
        } else if (icon == 'partly-cloudy-night') {
            currentWeatherIcon.src = partlyCloudyNight;
        } else if (icon == 'rain') {
            currentWeatherIcon.src = rain;
        } else if (icon == 'snow') {
            currentWeatherIcon.src = snow;
        } else {
            currentWeatherIcon.src = wind;
        }
    }

    function loadWeeklyIcons(day) {
        if (day == 1) {
            icon == jsonObject.days[0].icon;
        } else if (day == 2) {
            icon == jsonObject.days[1].icon;
        } else if (day == 3) {
            icon == jsonObject.days[2].icon;
        } else if (day == 4) {
            icon == jsonObject.days[3].icon;
        } else {
            icon == jsonObject.days[4].icon;
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
