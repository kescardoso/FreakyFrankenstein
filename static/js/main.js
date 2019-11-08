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

const bodyparts_ = document.querySelectorAll(".body-part");

bodyparts_.forEach(function(bp) {
    bp.style.display = "none";
});

const bodyparts = {
    leftarm: "url(images/monster/leftarm.png)",
    rightarm: "url(images/monster/rightarm.png)",
}

const pumpkinImages = {
  whole: "url(images/pumpkins/pumpkin_whole.png)",
  halfSmashed: "url(images/pumpkins/pumpkin_half_smashed.png)",
  smashed: "url(images/pumpkins/pumpkin_smashed.png)",
};

pumpkins.forEach(function(pumpkin) {
  pumpkin.addEventListener("click", function() {
      document.getElementById("arm-left").style.display = "";
    if (pumpkin.style.backgroundImage != pumpkinImages.smashed) {
      pumpkinScore++;
      pumpkin.style.backgroundImage = pumpkinImages.halfSmashed;
      setTimeout(function() {
        pumpkin.style.backgroundImage = pumpkinImages.smashed;
      }, 150);
      if (pumpkinScore >= winScore) {
        document.querySelector(".switch").style.backgroundImage = "url('images/switch/switch-on.png')";
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
  document.getElementById("arm-left").style.display = "none";
  document.querySelector(".switch").style.backgroundImage = "url('images/switch/switch-off.png')";
}
