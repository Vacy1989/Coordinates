document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction(e) {
  let x = e.clientX;
  let y = e.clientY;
  let result = "Coordinates: (" + x + "," + y + ")";

  let coordinatesDiv = document.getElementById("coordinatesDiv");
  coordinatesDiv.innerHTML = result;
  coordinatesDiv.style.display = "block";
  coordinatesDiv.style.left = x + 10 + "px";
  coordinatesDiv.style.top = y + 10 + "px";
}

document.getElementById("myDIV").addEventListener("mouseout", function () {
  document.getElementById("coordinatesDiv").style.display = "none";
});
