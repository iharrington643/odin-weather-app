import logoImage from './images/weather-svgrepo-com.svg';

export function loadHome() {
    document.body.innerHTML = '';

    const homeHeader = document.createElement('header');
    homeHeader.classList.add('home-header');
    document.body.appendChild(homeHeader);

    const headerLogo = document.createElement('img');
    headerLogo.id = 'header-logo';
    headerLogo.src = logoImage;
    homeHeader.appendChild(headerLogo);

    const headerText = document.createElement('p');
    headerText.classList.add('header-text');
    headerText.innerHTML = 'Weather<b><span style="color: #F4CE26;">Cast</span></b>';
    homeHeader.appendChild(headerText);

    const siteBody = document.createElement('div');
    siteBody.id = 'site-body';
    document.body.appendChild(siteBody);

    const searchContainer = document.createElement('div');
    searchContainer.id = 'search-container';
    siteBody.appendChild(searchContainer);

    const searchHeading = document.createElement('p');
    searchHeading.id = 'search-heading';
    searchHeading.textContent = "Welcome to WeatherCast!";
    searchContainer.appendChild(searchHeading);

    const searchDesc = document.createElement('p');
    searchDesc.id = 'search-desc';
    searchDesc.textContent = "Enter a location name or ZIP code to see its forecast."
    searchContainer.appendChild(searchDesc);

    const searchForm = document.createElement('form');
    searchForm.action = '/search';
    searchForm.setAttribute("method", "get");
    searchForm.id = 'search-form';
    searchContainer.appendChild(searchForm);

    const searchBar = document.createElement('input');
    searchBar.setAttribute("type", "search");
    searchBar.placeholder = 'Search for a location...';
    searchBar.id = 'search-bar';
    searchForm.appendChild(searchBar);
}