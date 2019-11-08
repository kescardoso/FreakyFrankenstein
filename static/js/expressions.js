const frankensteinFace = document.getElementById("frankenstein-face");
// Changing the styles temporarily so you can visually represent the element
frankensteinFace.style.height = "300px";
frankensteinFace.style.width = "300px";
frankensteinFace.style.backgroundColor = "#333";

// Object containing different states of expressions
const faces = {
  happy: "#123123", //URL to a happy face of Frankenstein, defaulted as a color for now
  unhappy: "#333", //URL to an unhappy face of Frankenstein, defaulted as a color for now
};

// Changes the value of the background-image of the frankenstein face element (when they exist), for now just the background color
function changeExpression(face) {
  frankensteinFace.style.backgroundColor = face;
}

// Just for testing the function
frankensteinFace.addEventListener("click", function() {
  changeExpression(faces.happy);
});
