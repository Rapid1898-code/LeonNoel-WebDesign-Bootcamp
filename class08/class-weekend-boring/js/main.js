document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day == "Tuesday" || day == "Thursday"){
    document.querySelector("#placeToSee").innerText = "Course!"
  } else if (day == "Sutterday" || day == "Sunday") {
    document.querySelector("#placeToSee").innerText = "Weekend!"
  } else {
    document.querySelector("#placeToSee").innerText = "Other Day!"
  }
}
