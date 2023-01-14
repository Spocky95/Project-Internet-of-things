console.log("connected");

let time = 0;

async function removeTime() {
  console.log("time decrement");
  time = time -= 15;
  if (time < 0) {
    time = 0;
  }
  console.log(time);
  await timeUpdate();
}

async function resetTimer() {
  console.log("time reset");
  time = 0;
  console.log(time);
  await timeUpdate();
}

async function addTime() {
  console.log("time increment");
  time = time += 15;
  console.log(time);
  await timeUpdate();
}

function timeUpdate() {
  document.getElementById("time").textContent = time;
}
