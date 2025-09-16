export function loadHome() {
    homeHeader = document.createElement('header');
    homeHeader.classList.add('home-header');
    searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    searchHeading = document.createElement('p');
    searchHeading.classList.add('search-heading');
    searchDesc = document.createElement('p');
    searchDesc.classList.add('search-desc');
    searchBar = document.createElement('input');
    searchBar.setAttribute("type", "search");
    searchBar.placeholder = 'Search for a location...';
    searchBar.classList.add('search-bar');
}