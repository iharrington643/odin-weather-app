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

function getDate() {
    const date = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return date.toLocaleDateString('en-US', options);
}

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
    Array.from(weatherPanels).forEach(weatherPanel => {
        const weatherPanelIcon = document.createElement('img');
        weatherPanelIcon.classList.add('weather-panel-icon');
        weatherPanel.appendChild(weatherPanelIcon);

        const weatherPanelText = document.createElement('p');
        weatherPanelText.classList.add('weather-panel-text');
        weatherPanel.appendChild(weatherPanelText);
    });

    function loadCurrentTextContent() {
        let date = getDate();
        let temperature = jsonObject.currentConditions.temp;
        let icon = jsonObject.currentConditions.icon;
        let weatherCondition = '';
        let minTemp = jsonObject.days[0].tempmin;
        let maxTemp = jsonObject.days[0].tempmax;

        if (icon == 'clear-day' || icon == 'clear-night') {
            weatherCondition = 'Clear';
        } else if (icon == 'partly-cloudy-day' || icon == 'partly-cloudy-night') {
            weatherCondition = 'Partly Cloudy';
        } else if (icon == 'cloudy') {
            weatherCondition = 'Cloudy';
        } else if (icon == 'rain') {
            weatherCondition = 'Rainy';
        } else if (icon == 'snow') {
            weatherCondition = 'Snowy';
        } else if (icon == 'fog') {
            weatherCondition = 'Foggy';
        } else {
            weatherCondition = 'Windy';
        }

        if (temperatureUnit == '°C') {
            temperature = fahrenheitToCelsius(temperature);
            minTemp = fahrenheitToCelsius(minTemp);
            maxTemp = fahrenheitToCelsius(maxTemp);
        }

        currentWeatherText.innerHTML = `<span style="font-weight: bold; font-size: 1.5em">${jsonObject.resolvedAddress}</span><br>`;
        currentWeatherText.innerHTML += `<span style="font-size: 0.7em;">${date}</span><br><br>`;
        currentWeatherText.innerHTML += `<span style="font-size: 3em; font-weight: bold;">${temperature} ${temperatureUnit}</span><br>`;
        currentWeatherText.innerHTML += `<span style="font-size: 0.9em;">${minTemp} ${temperatureUnit} - ${maxTemp} ${temperatureUnit} • ${weatherCondition}</span>`;
    }

    function loadWeeklyTextContent(day) {
        const weatherPanelTexts = document.getElementsByClassName('weather-panel-text');
        let panelIndex = null;
        let minTemp = 0;
        let maxTemp = 0;

        if (day == 1) {
            minTemp = jsonObject.days[0].tempmin;
            maxTemp = jsonObject.days[0].tempmax;
            panelIndex = weatherPanelTexts[0];
        } else if (day == 2) {
            minTemp = jsonObject.days[1].tempmin;
            maxTemp = jsonObject.days[1].tempmax;
            panelIndex = weatherPanelTexts[1];
        } else if (day == 3) {
            minTemp = jsonObject.days[2].tempmin;
            maxTemp = jsonObject.days[2].tempmax;
            panelIndex = weatherPanelTexts[2];
        } else if (day == 4) {
            minTemp = jsonObject.days[3].tempmin;
            maxTemp = jsonObject.days[3].tempmax;
            panelIndex = weatherPanelTexts[3];
        } else {
            minTemp = jsonObject.days[4].tempmin;
            maxTemp = jsonObject.days[4].tempmax;
            panelIndex = weatherPanelTexts[4];
        }

        if (temperatureUnit == '°C') {
            minTemp = fahrenheitToCelsius(minTemp);
            maxTemp = fahrenheitToCelsius(maxTemp);
        }

        panelIndex.innerHTML = `<span style="color: gray;">${minTemp} ${temperatureUnit}</span><br>`;
        panelIndex.innerHTML += `${maxTemp} ${temperatureUnit}`;
    }

    function loadCurrentIcon() {
        let icon = jsonObject.currentConditions.icon;

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
        const weatherPanelIcons = document.getElementsByClassName('weather-panel-icon');
        let icon = '';
        let panelIndex = null;

        if (day == 1) {
            icon = jsonObject.days[0].icon;
            panelIndex = weatherPanelIcons[0];
        } else if (day == 2) {
            icon = jsonObject.days[1].icon;
            panelIndex = weatherPanelIcons[1];
        } else if (day == 3) {
            icon = jsonObject.days[2].icon;
            panelIndex = weatherPanelIcons[2];
        } else if (day == 4) {
            icon = jsonObject.days[3].icon;
            panelIndex = weatherPanelIcons[3];
        } else {
            icon = jsonObject.days[4].icon;
            panelIndex = weatherPanelIcons[4];
        }

        if (icon == 'clear-day') {
            panelIndex.src = clearDay;
        } else if (icon == 'clear-night') {
            panelIndex.src = clearNight;
        } else if (icon == 'cloudy') {
            panelIndex.src = cloudy;
        } else if (icon == 'fog') {
            panelIndex.src = fog;
        } else if (icon == 'partly-cloudy-day') {
            panelIndex.src = partlyCloudyDay;
        } else if (icon == 'partly-cloudy-night') {
            panelIndex.src = partlyCloudyNight;
        } else if (icon == 'rain') {
            panelIndex.src = rain;
        } else if (icon == 'snow') {
            panelIndex.src = snow;
        } else {
            panelIndex.src = wind;
        }
    }
    
    loadCurrentIcon(jsonObject.currentConditions.icon);
    loadWeeklyIcons(1);
    loadWeeklyIcons(2);
    loadWeeklyIcons(3);
    loadWeeklyIcons(4);
    loadWeeklyIcons(5);
    loadCurrentTextContent();
    loadWeeklyTextContent(1);
    loadWeeklyTextContent(2);
    loadWeeklyTextContent(3);
    loadWeeklyTextContent(4);
    loadWeeklyTextContent(5);

    toggleButton.addEventListener('click', function() {
        if (temperatureUnit == '°F') {
            temperatureUnit = '°C';
            unitToggle.style.justifyContent = 'flex-end';
        } else {
            temperatureUnit = '°F';
            unitToggle.style.justifyContent = 'flex-start';
        }

        toggleButton.innerHTML = `${temperatureUnit}`;
        loadCurrentTextContent();
        loadWeeklyTextContent(1);
        loadWeeklyTextContent(2);
        loadWeeklyTextContent(3);
        loadWeeklyTextContent(4);
        loadWeeklyTextContent(5);
    });
}
