import './style.css';

// Import page-loading functions from respective .js files
import { loadHome } from './home.js';
import { loadWeatherPage } from './weather.js';

// Create blank jsonObject to load API data into and export
export let jsonObject = {};
// Establish validLocation variable to be used to test location input
let validLocation = true;

export function launchSearch() {
    const searchForm = document.getElementById('search-form');

    // Add event listener to search form that loads the weather page if validLocation == true
    searchForm.addEventListener('submit', async function(event) {
        const searchInput = document.getElementById('search-bar').value;

        event.preventDefault();

        // Run the asyncronous fetchWeather() function and wait for it to fetch weather results for location input
        await fetchWeather(searchInput);
        if (validLocation != false) {
            loadWeatherPage();
        } else {
            // If validLocation == false after fetchWeather() is run, reset the search form and set validLocation back to true
            alert("Invalid location.  Please try again.");
            searchForm.reset();
            validLocation = true;
        }
    })
}

// Establish asychronous function that takes location input
async function fetchWeather(location) {
    try {
        // Establish response variable and wait for it to fetch weather data for the location parameter
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=B9GWLUJEUZVXAPLZ6RJ3G6566&lang=en`);
        
        // If response is unsuccessful, throw an error
        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }

        // Create jsonData variable which waits for the response data to be retrieved in JSON form
        const jsonData = await response.json();
        // Set jsonObject's content equal to the jsonData JSON
        jsonObject = jsonData;

    } catch (error) {
        // If an error occurs, display an error message to the console and set validLocation to false
        console.error("Error fetching data", error);
        validLocation = false;
    }
}

// Run the loadHome() and launchSearch() functions to make webpage functional
loadHome();
launchSearch();
