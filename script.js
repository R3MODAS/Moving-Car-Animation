const surface = document.querySelector(".surface");
const car = document.querySelector(".car");
const img = document.querySelector(".car-img");
const imgChange = ["assets/Img_05.png","assets/Img_06.png"]
let flag = true;
console.log(surface);

document.addEventListener('keypress',(event)=>{

  console.log(event.key);
  if(event.key === 'Enter'){
    surface.classList.toggle('moveRight');
    car.classList.toggle("suspension");
  }

  if(event.key == 'w'){
    if(flag){
      img.src = imgChange[0];
      flag = false;
    }
    else{
      img.src = imgChange[1];
      flag = true;
    }
  }
});