import './style.css';
import { loadHome } from './home.js';
import { loadWeatherPage } from './weather.js';

loadHome();

function launchSearch() {
    const searchForm = document.getElementById('search-form');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        loadWeatherPage();
    })
}

launchSearch();