const BeginExercise = document.getElementById("begin-exercise");

function startWorkout() {
  const exercises = document.getElementById("duration").value;
  // const circuits = document.getElementById("circuits").value;
  // console.log(duration + circuits);
  let duration = exercises * 60;
  let minutes, seconds;

  const exerciseTimer = setInterval(function () {
    const countdown = document.getElementById("countdown");
    console.log(duration);
    if (duration <= 0) {
      clearInterval(exerciseTimer);
    } else {
      minutes = Math.floor(duration / 60);
      seconds = duration - minutes * 60;
      if (seconds == 15) {
        console.log("REST");
      }
      countdown.innerHTML = minutes + ":" + seconds;
      duration--;
    }
  }, 1000);
}

BeginExercise.onclick = startWorkout;
