// Used to open and close the menu button in the nav menu
function showAndHideClass(className) {
    // Get the html of the element with the class name
    const headerNavPages = document.querySelector(className);

    // Check if the element exists update how it is displayed
    if (headerNavPages) {
        // If the display is none or blank then change it to flex else change it to none
        if (headerNavPages.style.display === 'none' || headerNavPages.style.display === '') {
            headerNavPages.style.display = 'flex'
        } else {
            headerNavPages.style.display = ''
        } 
    }
}