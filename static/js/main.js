let pumpkins = document.querySelectorAll(".pumpkin");

const pumpkinImages = {
  whole: "url(../../images/pumpkins/pumpkin_whole.png)",
  halfSmashed: "url(../../images/pumpkins/pumpkin_half_smashed.png)",
  smashed: "url(../../images/pumpkins/pumpkin_smashed.png)",
};

pumpkins.forEach(function(pumpkin) {
  let smashed = false;
  pumpkin.addEventListener("click", function() {
    if (!smashed) {
      this.style.backgroundImage = pumpkinImages.halfSmashed;
      setTimeout(function() {
        pumpkin.style.backgroundImage = pumpkinImages.smashed;
        smashed = true;
      }, 150);
    }
  });
});
