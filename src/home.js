import logoImage from './images/weather-svgrepo-com.svg';

export function loadHome() {
    // Clear out the document body's contents every time loadHome() is iterated
    document.body.innerHTML = '';

    // Create header and its corresponding text and logo elements
    const homeHeader = document.createElement('header');
    homeHeader.id = 'home-header';
    document.body.appendChild(homeHeader);

    const headerLogo = document.createElement('img');
    headerLogo.id = 'header-logo';
    headerLogo.src = logoImage;
    homeHeader.appendChild(headerLogo);

    const headerText = document.createElement('p');
    headerText.classList.add('header-text');
    headerText.innerHTML = 'Weather<b><span style="color: #F4CE26;">Cast</span></b>';
    homeHeader.appendChild(headerText);

    // Create site body to separate the rest of the page from the header
    const siteBody = document.createElement('div');
    siteBody.id = 'site-body';
    document.body.appendChild(siteBody);

    // Create search container comprised of a heading, description, and search form
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

    // Create a search bar input element and a submit button to create a functional search tool
    const searchBar = document.createElement('input');
    searchBar.setAttribute("type", "search");
    searchBar.placeholder = 'Search for a location...';
    searchBar.id = 'search-bar';
    searchForm.appendChild(searchBar);

    const submitButton = document.createElement('button');
    submitButton.id = 'submit-button';
    submitButton.type = 'submit';
    submitButton.textContent = '⌕';
    searchForm.appendChild(submitButton);
}