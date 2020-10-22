document.addEventListener("mouseover", (event) => {
  // grejer som härnder när vi håller musen ovanför ballongen
  const isBalloon = event.target.classList.contains("balloon");
  const isPopped = event.target.classList.contains("popped");
  if (isBalloon && !isPopped) {
    event.target.classList.add("popped"); // när hover över ballonger, lägger den till calssen "popped" i classen balloon

    const poppedCount = document.querySelectorAll(".balloon.popped").length; // registrera hur många som är popped
    balloonCound = document.querySelectorAll(".balloon").length;

    if (poppedCount === balloonCound) {
      const balloons = document.querySelector(".balloons");
      balloons.innerHTML = "";
      const h1 = document.createElement("h1"); // iden är att när alla ballons är poppade skall vi skappa ett ny Hi class

      h1.textContent = "Yay! you won!";
      h1.classList.add(".congratsMessage");
      balloons.appendChild(h1);
    }
  }
});
