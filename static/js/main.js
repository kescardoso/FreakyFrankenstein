// When a pumpkin is smashed the pumpkin score will increase by 1
let pumpkinScore = 0,
  winScore = document.querySelectorAll(".pumpkin").length,
  canPullLever = false,
  found = [0,1,2,3];

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
	bp = found[Math.floor(Math.random() * found.length)];
	found = found.filter(part => part != bp);
	
	console.log(found)
	
	switch(bp) {
	  case 0:
		document.querySelector("#arm-left").style.display = "";
		break;
	  case 1:
		document.querySelector("#arm-right").style.display = "";
		break;
	  case 2:
		document.querySelector("#leg-left").style.display = "";
		break;
	  case 3:
		document.querySelector("#leg-right").style.display = "";
		break;
	  default:
}
	
	
    if (pumpkin.style.backgroundImage != pumpkinImages.smashed) {
      pumpkinScore++;
      pumpkin.style.backgroundImage = pumpkinImages.halfSmashed;
      setTimeout(function() {
        pumpkin.style.backgroundImage = pumpkinImages.smashed;
      }, 150);
      if (pumpkinScore >= winScore) {
        document.querySelector(".switch").style.backgroundImage = "url('images/switch/switchON.png')";
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
  found = [0,1,2,3];
  bodyparts_.forEach(function(bp) {
    bp.style.display = "none";
  });
  document.querySelector(".switch").style.backgroundImage = "url('images/switch/switchOFF.png')";
}
