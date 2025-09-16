export function loadHome() {
    const homeHeader = document.createElement('header');
    homeHeader.classList.add('home-header');
    document.body.appendChild(homeHeader);

    const headerText = document.createElement('p');
    headerText.classList.add('home-header');
    headerText.textContent = "WeatherCast";
    homeHeader.appendChild(headerText);

    const siteBody = document.createElement('div');
    siteBody.classList.add('site-body');
    document.body.appendChild(siteBody);

    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    siteBody.appendChild(searchContainer);

    const searchHeading = document.createElement('p');
    searchHeading.classList.add('search-heading');
    searchHeading.textContent = "Welcome to WeatherCast!";
    searchContainer.appendChild(searchHeading);

    const searchDesc = document.createElement('p');
    searchDesc.classList.add('search-desc');
    searchDesc.textContent = "Enter a location name or ZIP code to see its forecast."
    searchContainer.appendChild(searchDesc);

    const searchBar = document.createElement('input');
    searchBar.setAttribute("type", "search");
    searchBar.placeholder = 'Search for a location...';
    searchBar.classList.add('search-bar');
    searchContainer.appendChild(searchBar);
}