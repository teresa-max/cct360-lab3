let image1 = document.getElementById("image1");
let image3 = document.getElementById("image3");

let storyTitle = document.getElementById("story-title");
let storyDescription = document.getElementById("story-description");

let button1 = document.getElementById("sequence-one");
let button2 = document.getElementById("sequence-two");

function showSequenceOne() {
  image1.src = "images/rest.jpg";
  image1.alt = "A dancer sitting with her head lowered";

  image3.src = "images/stage.jpg";
  image3.alt = "A dancer performing under stage lights";

  storyTitle.textContent = "Finding Courage";
  storyDescription.textContent =
    "From a quiet moment to preparation, then stepping into the spotlight.";
}

function showSequenceTwo() {
  image1.src = "images/stage.jpg";
  image1.alt = "A dancer performing under stage lights";

  image3.src = "images/rest.jpg";
  image3.alt = "A dancer sitting with her head lowered";

  storyTitle.textContent = "After the Applause";
  storyDescription.textContent =
    "From the spotlight to backstage, revealing the exhaustion behind the performance.";
}

button1.addEventListener("click", showSequenceOne);
button2.addEventListener("click", showSequenceTwo);
