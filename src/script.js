import './style.css';
import { loadHome } from './home.js';
import { loadWeatherPage } from './weather.js';

export let jsonObject = {};
let validLocation = true;

function launchSearch() {
    const searchForm = document.getElementById('search-form');

    searchForm.addEventListener('submit', async function(event) {
        const searchInput = document.getElementById('search-bar').value;

        event.preventDefault();
        await fetchWeather(searchInput);
        if (validLocation != false) {
            loadWeatherPage();
        } else {
            searchForm.reset();
            validLocation = true;
        }
    })
}

async function fetchWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=B9GWLUJEUZVXAPLZ6RJ3G6566`);
        
        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }

        const jsonData = await response.json();
        jsonObject = jsonData;

    } catch (error) {
        console.error("Error fetching data", error);
        validLocation = false;
    }
}

loadHome();
launchSearch();
