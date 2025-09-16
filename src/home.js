export function loadHome() {
    const homeHeader = document.createElement('header');
    homeHeader.classList.add('home-header');
    document.body.appendChild(homeHeader);

    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    document.body.appendChild(searchContainer);

    const searchHeading = document.createElement('p');
    searchHeading.classList.add('search-heading');
    searchContainer.appendChild(searchHeading);

    const searchDesc = document.createElement('p');
    searchDesc.classList.add('search-desc');
    searchContainer.appendChild(searchDesc);

    const searchBar = document.createElement('input');
    searchBar.setAttribute("type", "search");
    searchBar.placeholder = 'Search for a location...';
    searchBar.classList.add('search-bar');
    searchContainer.appendChild(searchBar);
}