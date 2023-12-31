// Select the text you want to make it circular
const text = document.querySelector(".circular-text .text")

// Make the selected text circler with CircleType
// you can find the full docs here: https://circletype.labwire.ca/
const rotate = new CircleType(text).radius(65)

// Add a scroll listener to the window object and rotate the selected text according to the scroll
// we used * 0.15 to make the rotation looks smoother
window.addEventListener("scroll", function () {
    text.style.transform = `rotate(${window.scrollY * 0.15}deg)`
})