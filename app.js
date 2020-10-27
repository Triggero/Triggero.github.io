//Select some vars
const card = document.querySelector("#thumbnail");
const container = document.querySelector("#cardAnimate");

//Move card based on mouse location
cardAnimate.addEventListener("mousemove", function (event) {
    let xAxis = (window.innerWidth / 2 - event.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//No transition when mouse is in card
container.addEventListener("mouseenter", function (event) {
    card.style.transition = "all 0.15s ease";
})

//Transition the moment mouse leaves card
container.addEventListener("mouseleave", function (event) {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
})