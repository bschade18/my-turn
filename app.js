

window.addEventListener("load", myInit, true); function myInit(){  setInnerText(); setNextUp(); };

const people = ["Bobby", "Abbey", "Summer", "Sloane"];
let turnIndex = 0;
const btn = document.querySelector('button');
btn.addEventListener('click', updateTurn);

function setInnerText() {
const heading = document.querySelector('.turn');
heading.innerText = people[turnIndex];
}

function setNextUp() {
  const next = document.querySelector('h3');

  if(turnIndex === people.length - 1) {
    next.innerText = `${people[0]} is up next`;
  } else {
    next.innerText = `${people[turnIndex + 1]} is up next`;
  }
}

function updateTurn() {
  if(turnIndex === people.length - 1) {
    turnIndex = 0;
  } else {
     turnIndex++;
  }
  setInnerText();
  setNextUp();
}
