const btn = document.querySelector(".btn");
const spin = document.querySelector(".container > .spin");
const arrow = document.querySelector(".container > .Arrow");
const addText = document.querySelector(".addText");
const sectors = spin.querySelectorAll("div");

let spinning = false;

btn.addEventListener("click", () => {
  if (spinning) return;

  spinning = true;
  let myRand = Math.floor(Math.random() * 360) + 3600;
  spin.style.transform = "scale(1.1) rotate(" + myRand + "deg)";
  console.log(myRand - 3600);

  setTimeout(() => {
    spin.style.transition = "none";
    spin.style.transform = "scale(1.1) rotate(0deg)";
    // عددی بین 1 تا 360-359
    let finalAngle = (myRand - 3600) % 360;
    let section = Math.floor(((360 - finalAngle + 22.5) % 360) / 45);

    if (section >= section.length) section = 0;
    let addText = document.querySelector(".addText");

    addText.innerHTML = sectors[section].dataset.prize;

    setTimeout(() => {
      spin.style.transition = "transform 10s";
      spinning = false;
    }, 50);
  }, 12000);
});
