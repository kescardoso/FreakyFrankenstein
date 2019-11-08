// When a pumpkin is smashed the pumpkin score will increase by 1
let pumpkinScore = 0;
let winScore = document.querySelectorAll(".pumpkin").length;

/*
So winning conditions would search for this, and ran through whenever a pumpkin is smashed
if (pumpkinScore >= winScore) {
    canPullLever = true;
}
*/

let canPullLever = false;

const lever = document.getElementById("lever");

/* Eventlistener for the lever, will run a function if the 
* canPullLever boolean is set to true (It will once all pumpkins are smashed) */
lever.addEventListener("click", function() {
  if (!canPullLever) {
    console.log("Can't pull the lever yet.");
  } else {
    leverPulled();
  }
});

function leverPulled() {
  // Logic for animation once the lever is pulled
}
