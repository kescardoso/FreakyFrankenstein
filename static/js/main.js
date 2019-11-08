// When a pumpkin is smashed the pumpkin score will increase by 1
let pumpkinScore = 0,
  winScore = document.querySelectorAll(".pumpkin").length,
  canPullLever = false;

const lever = document.querySelector(".switch"),
  pumpkins = document.querySelectorAll(".pumpkin");

/* Eventlistener for the lever, will run a function if the
 * canPullLever boolean is set to true (It will once all pumpkins are smashed) */
lever.addEventListener("click", function() {
  if (!canPullLever) {
    console.log("Can't pull the lever yet.");
  } else {
    leverPulled();
  }
});

const pumpkinImages = {
  whole: "url(../../images/pumpkins/pumpkin_whole.png)",
  halfSmashed: "url(../../images/pumpkins/pumpkin_half_smashed.png)",
  smashed: "url(../../images/pumpkins/pumpkin_smashed.png)",
};

pumpkins.forEach(function(pumpkin) {
  pumpkin.addEventListener("click", function() {
    if (pumpkin.style.backgroundImage != pumpkinImages.smashed) {
      pumpkinScore++;
      pumpkin.style.backgroundImage = pumpkinImages.halfSmashed;
      setTimeout(function() {
        pumpkin.style.backgroundImage = pumpkinImages.smashed;
      }, 150);
      if (pumpkinScore >= winScore) {
        canPullLever = true;
      }
    }
  });
});

function leverPulled() {
  // Logic for animation once the lever is pulled
  console.log("Lever pulled!");
  pumpkins.forEach(function(pumpkin) {
    pumpkin.style.backgroundImage = pumpkinImages.whole;
  });
  pumpkinScore = 0;
  canPullLever = false;
}

const frankensteinFace = document.querySelector(".head");
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
