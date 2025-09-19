import './style.css';
import { loadHome } from './home.js';
import { loadWeatherPage } from './weather.js';

export const jsonObject = {};

loadHome();

function launchSearch() {
    const searchForm = document.getElementById('search-form');

    searchForm.addEventListener('submit', function(event) {
        const searchInput = document.getElementById('search-bar').value;

        event.preventDefault();
        loadWeatherPage();
        fetchWeather(searchInput);
    })
}

async function fetchWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=B9GWLUJEUZVXAPLZ6RJ3G6566`);
        
        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }
        const jsonData = await response.json();
        jsonObject = JSON.parse(jsonData);

    } catch (error) {
        console.error(error.message);
    }
}

launchSearch();
