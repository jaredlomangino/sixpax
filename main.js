const BeginExercise = document.getElementById("begin-exercise");

function startWorkout() {
  const exercises = [];

  exercises[0] = { name: "plank" };
  exercises[1] = { name: "Heels to the Heavens" };
  exercises[2] = { name: "X man plank" };
  exercises[3] = { name: "crunch" };
  exercises[4] = { name: "russian twist" };
  exercises[5] = { name: "sit up" };

  const numExercises = document.getElementById("duration").value;
  let duration = numExercises * 60;
  let minutes, seconds;

  const exerciseTimer = setInterval(function () {
    const countdown = document.getElementById("countdown");

    console.log(duration);
    if (duration <= 0) {
      clearInterval(exerciseTimer);
    } else {
      minutes = Math.floor(duration / 60);
      seconds = duration - minutes * 60;
      if (seconds == 55) {
        console.log("REST");
        playRestAudio();
        displayExerciseName(exercises);
      } else if (seconds == 50) {
        playAlertAudio();
      }

      if (seconds < 10) {
        countdown.innerHTML = minutes + ":0" + seconds;
      } else {
        countdown.innerHTML = minutes + ":" + seconds;
      }

      duration--;
    }
  }, 1000);
}

function playRestAudio() {
  const restAudio = document.getElementById("rest-audio");
  restAudio.play();
}

function playAlertAudio() {
  const AlertAudio = document.getElementById("10-seconds");
  AlertAudio.play();
}

function displayExerciseName(exercises) {
  const exerciseName = document.getElementById("exercise-name");
  exerciseName.innerHTML = exercises[0].name;
}

BeginExercise.onclick = startWorkout;
