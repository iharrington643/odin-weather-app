// Import page-loading functions from .js files, as well as jsonObject
import { loadHome } from './home.js';
import { launchSearch } from './script.js';
import { jsonObject } from './script.js';

// Import weather icons from images directory
import clearDay from './images/clear-day.png';
import clearNight from './images/clear-night.png';
import cloudy from './images/cloudy.png';
import fog from './images/fog.png';
import partlyCloudyDay from './images/partly-cloudy-day.png';
import partlyCloudyNight from './images/partly-cloudy-night.png';
import rain from './images/rain.png';
import snow from './images/snow.png';
import wind from './images/wind.png';

// Create variable to keep track of what unit temperature is being reported in
let temperatureUnit = '°F';

// Create fahrenheitToCelsius() conversion function to be run every time the temp unit is changed
function fahrenheitToCelsius(tempF) {
    // Use conversion formula to convert Fahrenheit to Celsius, then return the result rounded to 1 decimal place
    let degreesCelsius = (tempF - 32) * (5/9);
    return degreesCelsius.toFixed(1);
};

// Create getDate() function to return the current date in long written format (ex. Wednesday, September 8, 1979)
function getDate() {
    // Store the current date in the date variable
    const date = new Date();

    // Create options object to contain the ideal formatting for each piece of data
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    // Use .toLocaleDateString() to return the date formatted using the options object
    return date.toLocaleDateString('en-US', options);
}

export function loadWeatherPage() {
    const headerLogo = document.getElementById('header-logo');

    const siteBody = document.getElementById('site-body');
    siteBody.innerHTML = '';

    const weatherContainer = document.createElement('div');
    weatherContainer.id = 'weather-container';
    siteBody.appendChild(weatherContainer);

    // Create unitToggle div and its child element toggleButton to simulate a toggle button
    const unitToggle = document.createElement('div');
    unitToggle.classList.add('unit-toggle');
    currentWeatherPanel.appendChild(unitToggle);

    const toggleButton = document.createElement('button');
    toggleButton.classList.add('toggle-button');
    // Set the innerHTMl of toggleButton equal to the current temperature unit
    toggleButton.innerHTML = `${temperatureUnit}`;
    unitToggle.appendChild(toggleButton);

    // Create currentWeatherPanel and its corresponding icon and text elements for displaying daily weather
    const currentWeatherPanel = document.createElement('div');
    currentWeatherPanel.id = 'current-weather-panel';
    weatherContainer.appendChild(currentWeatherPanel);

    const currentWeatherIcon = document.createElement('img');
    currentWeatherIcon.id = 'current-weather-icon';
    currentWeatherPanel.appendChild(currentWeatherIcon);

    const currentWeatherText = document.createElement('p');
    currentWeatherText.id = 'current-weather-text';
    currentWeatherPanel.appendChild(currentWeatherText);

    // Create weeklyWeatherContainer and its five child elements for displaying the 5-day forecast (including the current day)
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

    // Establish a weatherPanels object consisting of all elements of class weather-panel
    const weatherPanels = document.getElementsByClassName('weather-panel');
    Array.from(weatherPanels).forEach(weatherPanel => {
        // For each weather panel, assign it icon and text elements for displaying info
        const weatherPanelIcon = document.createElement('img');
        weatherPanelIcon.classList.add('weather-panel-icon');
        weatherPanel.appendChild(weatherPanelIcon);

        const weatherPanelText = document.createElement('p');
        weatherPanelText.classList.add('weather-panel-text');
        weatherPanel.appendChild(weatherPanelText);
    });

    // Create a function to load all necessary information about the daily weather
    function loadCurrentTextContent() {
        let date = getDate();
        // Establish a temperature variable to store the current temperature
        let temperature = jsonObject.currentConditions.temp;
        // Access the weather icon from the JSON object 
        let icon = jsonObject.currentConditions.icon;
        let weatherCondition = '';
        // Access the min and max temperature from the JSON object
        let minTemp = jsonObject.days[0].tempmin;
        let maxTemp = jsonObject.days[0].tempmax;

        // Set weatherCondition's value dynamically depending on the value of icon
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

        // If the temperature unit is set to Celsius, convert all temperature measurements using fahrenheitToCelsius()
        if (temperatureUnit == '°C') {
            temperature = fahrenheitToCelsius(temperature);
            minTemp = fahrenheitToCelsius(minTemp);
            maxTemp = fahrenheitToCelsius(maxTemp);
        }

        // Add textual information to the text section's innerHTML, applying custom formatting to emphasize information
        currentWeatherText.innerHTML = `<span style="font-weight: bold; font-size: 1.3em;">${jsonObject.resolvedAddress}</span><br>`;
        currentWeatherText.innerHTML += `<span style="font-size: 0.7em;">${date}</span><br><br>`;
        currentWeatherText.innerHTML += `<span style="font-size: 2.8em; font-weight: bold;">${temperature} ${temperatureUnit}</span><br>`;
        currentWeatherText.innerHTML += `<span style="font-size: 0.9em;">${minTemp} ${temperatureUnit} - ${maxTemp} ${temperatureUnit} • ${weatherCondition}</span>`;
    }

    // Create a function to load textual info about the 5-day weather forecast (min and max temp), taking the input 'day'
    function loadWeeklyTextContent(day) {
        const weatherPanelTexts = document.getElementsByClassName('weather-panel-text');
        // Create a panelIndex variable to specify which weather panel text is being loaded into
        let panelIndex = null;
        // Make min and max temp equal to 0, as they will be updated later on
        let minTemp = 0;
        let maxTemp = 0;

        // Dynamically set the min and max temp, as well as the panel index, assigning values corresponding with the day
        if (day == 1) {
            // For the first day, set the min and max temp equal to those of the first 'days' index
            minTemp = jsonObject.days[0].tempmin;
            maxTemp = jsonObject.days[0].tempmax;
            // For the first day, set the panelIndex equal to that of the first panel
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

        // If temperature unit is equal to Celsius, convert the min and max temp to Fahrenheit
        if (temperatureUnit == '°C') {
            minTemp = fahrenheitToCelsius(minTemp);
            maxTemp = fahrenheitToCelsius(maxTemp);
        }

        // Append the textual information to the innerHTML of whichever panel is at the current panelIndex
        panelIndex.innerHTML = `<span style="color: gray;">${minTemp} ${temperatureUnit}</span><br>`;
        panelIndex.innerHTML += `${maxTemp} ${temperatureUnit}`;
    }

    // Create a function to load the icon for the daily weather
    function loadCurrentIcon() {
        // Get the icon info from jsonObject and assign it to icon
        let icon = jsonObject.currentConditions.icon;

        // Dynamically set the icon image depending on the weather condition
        if (icon == 'clear-day') {
            // Set the src equal to the corresponding image link
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

    // Create a function to load the icons for the 5-day weather forecast, taking an argument for 'day'
    function loadWeeklyIcons(day) {
        const weatherPanelIcons = document.getElementsByClassName('weather-panel-icon');
        // Set the value of icon to '' so that it can later be updated
        let icon = '';
        let panelIndex = null;

        // Dynamically update the (textual) value of icon and the panelIndex depending on the day
        if (day == 1) {
            icon = jsonObject.days[0].icon;
            // This time, panelIndex will refer to the icon index, rather than the text index
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

        // Depending on the value of icon (the weather conditions), set the image src equal to the corresponding image link
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
    
    // Load the current icon
    loadCurrentIcon();
    // Load the 5-day icons
    loadWeeklyIcons(1);
    loadWeeklyIcons(2);
    loadWeeklyIcons(3);
    loadWeeklyIcons(4);
    loadWeeklyIcons(5);
    // Load the current text content
    loadCurrentTextContent();
    // Load the 5-day text content
    loadWeeklyTextContent(1);
    loadWeeklyTextContent(2);
    loadWeeklyTextContent(3);
    loadWeeklyTextContent(4);
    loadWeeklyTextContent(5);

    // Add an event listener to toggle button which changes the weather report's temperature unit on click
    toggleButton.addEventListener('click', function() {
        // If the temperature unit was equal to F, set it to C and right-align the inner toggle button
        if (temperatureUnit == '°F') {
            temperatureUnit = '°C';
            unitToggle.style.justifyContent = 'flex-end';
        // Else, set the temperature unit to F and left-align the inner toggle button
        } else {
            temperatureUnit = '°F';
            unitToggle.style.justifyContent = 'flex-start';
        }

        // Change the innerHTML of the toggle button to correspond with the current temp unit
        toggleButton.innerHTML = `${temperatureUnit}`;

        // Reload the current and weekly text content, allowing for the text to be set with the correct unit and temp
        loadCurrentTextContent();
        loadWeeklyTextContent(1);
        loadWeeklyTextContent(2);
        loadWeeklyTextContent(3);
        loadWeeklyTextContent(4);
        loadWeeklyTextContent(5);
    });

    // Add event listener to headerLogo which takes the user back to the homepage on click
    headerLogo.addEventListener('click', function() {

        // Reset temp unit and toggle switch position
        temperatureUnit = '°F';
        unitToggle.style.justifyContent = 'flex-start';

        // Return to home page using loadHome()
        loadHome();
        // Run launchSearch() so that API data can be properly searched for and fetched
        launchSearch();
    })
}
