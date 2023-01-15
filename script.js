const surface = document.querySelector(".surface");
const car = document.querySelector(".car");
const img = document.querySelector(".car-img");
const cars = ["assets/Img_05.png", "assets/Img_06.png"];
let flag = true;

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log(e);
    surface.classList.toggle("moveRight");
    car.classList.toggle("suspension");
  }
});

document.addEventListener("keypress", (e) => {
  if (e.key === "w") {
    if (flag) {
      flag = false;
      img.setAttribute("src", cars[0]);
    } else {
      flag = true;
      img.setAttribute("src", cars[1]);
    }
  }
});
