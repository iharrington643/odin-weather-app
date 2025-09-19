export function loadWeatherPage() {
    const siteBody = document.getElementById('site-body');
    siteBody.innerHTML = '';

    const weatherContainer = document.createElement('div');
    weatherContainer.id = 'weather-container';
    siteBody.appendChild(weatherContainer);
}