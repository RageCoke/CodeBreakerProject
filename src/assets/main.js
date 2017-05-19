let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields(){
  if(answer == "") {
      answer = Math.floor(Math.random() * 10000).toString();
      while(answer.length < 4) {
          answer = "0" + answer;
      }
      document.getElementById('answer').value = answer;
  }
}
