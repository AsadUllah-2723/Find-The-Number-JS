let timer = 100;
let randomNumber = 0;
let points = 0;

const createPlayground = () => {
  let boxes = "";
  for (let i = 1; i <= 276; i++) {
    let num = Math.floor(Math.random() * 25);
    boxes += `<div id="boxes">${num}</div>`;
  }
  document.querySelector("#playground").innerHTML = boxes;
};

const timeLeft = () => {
  const timeIntervel = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timeIntervel);
      document.querySelector("#playground").innerHTML = `<div>
      <h1>Game Over</h1>
      </div>`;
    }
  }, 1000);
};

const newNumber = () => {
  randomNumber = Math.floor(Math.random() * 25);
  console.log(randomNumber);
  document.querySelector("#number").textContent = randomNumber;
};

const increasePoints = () => {
  const num = (points += 1);
  document.querySelector("#points").textContent = num;
};

document.querySelector("#playground").addEventListener("click", (val) => {
  const check = Number(val.target.textContent);
  console.log(check);
  if (check === randomNumber) {
    increasePoints();
    newNumber();
    createPlayground();
  }
});

timeLeft();
newNumber();
createPlayground();
