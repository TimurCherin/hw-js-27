const body = document.querySelector("body");
const list = document.querySelector(".gallery");
const container = document.createElement("div");
const allImg = document.querySelectorAll(".image");
container.classList.add("full-image-container");
let imageIndex;
let imageUrl;
allImg.forEach((el, index) =>
  el.addEventListener("click", (event) => {
    console.log(index);
    imageIndex = index;
    imageUrl = allImg[imageIndex].getAttribute("src");
    fullImg.setAttribute("src", imageUrl);
    container.style.display = "block";
  })
);
const firstIndex = list[0];
body.prepend(container);
const fullImg = document.createElement("img");
container.prepend(fullImg);
document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code === "ArrowLeft") {
    imageIndex -= 1;
    if (imageIndex < 0) {
      imageIndex = allImg.length - 1;
    }
    imageUrl = allImg[imageIndex].getAttribute("src");
    fullImg.setAttribute("src", imageUrl);
  }
  if (event.code === "ArrowRight") {
    imageIndex += 1;
    if (imageIndex > allImg.length - 1) {
      imageIndex = 0;
    }
    imageUrl = allImg[imageIndex].getAttribute("src");
    fullImg.setAttribute("src", imageUrl);
  }
  if (event.code === "Escape") {
    container.style.display = "none";
  }
});
// ex 2
const boxes = document.querySelector("div#boxes");
const number = document.querySelector("#controls input");
const render = document.querySelector("button[data-action='render']");
const destroy = document.querySelector("button[data-action='destroy']");
render.addEventListener("click", createBoxes);
let amount;
function createBoxes(amount) {
  amount = number.value;
  let size = 20;
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    size += 10;
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    box.style.backgroundColor = randomColor();
    boxes.appendChild(box);
  }
}

destroy.addEventListener("click", (event) => {
  boxes.innerHTML = "";
});

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}