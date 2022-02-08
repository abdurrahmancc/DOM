function makeRed() {
    document.body.style.backgroundColor = "red";
  }
  const blueButton = document.getElementById("blueButton");
  blueButton.onclick = makeBlue;
  function makeBlue() {
    document.body.style.backgroundColor = "blue";
  };
  const greenButton = document.getElementById("greenButton");
  greenButton.onclick = function () {
    document.body.style.backgroundColor = "green";
  };
  const goldenrod = document.getElementById("goldenrod");
  goldenrod.addEventListener("click", makeGoldenRod);
  function makeGoldenRod() {
    document.body.style.backgroundColor = "goldenrod";
  };
  const hotpink = document.getElementById("hotpink");
  hotpink.addEventListener("click", function () {
    document.body.style.backgroundColor = "hotpink";
  });
        document.getElementById("indigo").addEventListener("click", function () {
        document.body.style.backgroundColor = "indigo";
      });