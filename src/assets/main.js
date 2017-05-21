let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(attempt == "" || answer == ""){
      setHiddenFields();
    }

    if(!validateInput(input.value)){
      return false;
    }else{
      attemp++;
    }

    if(getResults(input.value)){
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    }else if(attempt >= 10){
      setMessage("You Lose! :(");
    }else {
      setMessage("Incorrect, try again.");

    }
}

//implement new functions here
function setHiddenFields(){
    attempt = 0;
    answer = Math.floor(Math.random()*10000).toString();
      while(answer.length < 4){
         answer = "0" + answer;
      }
    document.getElementById('answer').value = answer;
    }
function setMessage(message)
  message.innerHTML = message;
}

function validateInput(parameter){
    if(parameter.length == 4){
      return true
    }
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
}

function getResults(input){
    var results = document.getElementById("results");
    var bResult = "<div class = \"row\"><span class = \"col-md-6\">";
    var cResult = "</span><div class = \"col-md-6\">";
    var correctPosition = "<span class=\"glyphicon glyphicon-ok\"></span>";
    var notCorrectPosition ="<span class=\"glyphicon glyphicon-transfe\"></span>";
    var wrongAnswer = "<span class=\"glyphicon glyphicon-remove\"></span>";
    var finalResult = bResult + input + cresult;
    var count;
    for(var i = 0; i<4; i++){
      if(input.charAt(i) == answer.charAt(i)){
        finalResult += correctPosition;
        count ++;
      }else if(answer.indexOf(input.charAt(i)) != -1){
        finalResult += notCorrectPosition;
      }else{
        finalResult += wrongAnswer;
      }
    }
    finalResult += "</div></div>";
    results.innerHTML += finalResult;
    return count == 4 ? true:false;
}
function showAnswer(check){
  var code = document.getElementById("code");
  if(check){
    code.className += " success";
    code.innerHTML = answer;
  }else{
    code.className += " failure";
    code.innerHTML = answer;
  }
}

function showReplay(){
  var styleOfGuessing = document.getElementById("guessing-div");
  var styleOfReplay = document.getElementById("replay-div");
  styleOfGuessing.style = "display:none";
  styleOfReplay.style = "display:block";
}
