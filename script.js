function increaseFontSize() {  // function to increase the font size of the whole page
    var body = document.body;  // gets the body element of the page
    var current = parseFloat(window.getComputedStyle(body).fontSize);
      // gets the current font size of the body and converts it into a number
    body.style.fontSize = (current + 2) + "px";
}

// function to decrease the font size of the whole page
function decreaseFontSize() {
    var body = document.body;
    var current = parseFloat(window.getComputedStyle(body).fontSize);
    body.style.fontSize = (current - 2) + "px";
}
// function to reset the font size back to default
function resetFontSize() {
    document.body.style.fontSize = "16px";
}