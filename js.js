console.log("connected");

let time = 0;

async function removeTime() {
  console.log("time decrement");
  time -= 15;
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
  time += 15;
  console.log(time);
  await timeUpdate();
}

function timeUpdate() {
  document.getElementById("time").textContent = time + "s";
}

function post() {
  document.getElementById("time").textContent = "Posted";
  time = 0;
  //---------------
  axios.defaults.baseURL = "https://ptsv3.com";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios
    .post("/t/4322432342/", { time: 5 })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}
