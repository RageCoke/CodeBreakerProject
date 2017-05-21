let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(attempt == "" || answer == ""){
      setHiddenFields();
    }

    if(!validateInput(input.value)){
      return;
    }
      attemp++;


    if(getResults(input.value)){
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    }else if(attempt >= 10){
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    }else {
      setMessage("Incorrect, try again.");
    }
}

//implement new functions here
function setHiddenFields(){
    attempt.value = "0";
    answer.value = Math.floor(Math.random()*10000).toString();
      while(answer.value.length < 4){
         answer = "0" + answer;
      }
    document.getElementById('answer').value = answer;
}

function setMessage(message)

  document.getElementById("message").innerHTML = message;
}

function validateInput(parameter){
    if(parameter.length == 4){
      return true
    }
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
}

function getResults(input){
    var bResult = "<div class = \"row\"><span class = \"col-md-6\">";
    var cResult = "</span><div class = \"col-md-6\">";
    var correctPosition = "<span class=\"glyphicon glyphicon-ok\"></span>";
    var notCorrectPosition ="<span class=\"glyphicon glyphicon-transfe\"></span>";
    var wrongAnswer = "<span class=\"glyphicon glyphicon-remove\"></span>";
    var finalResult = bResult + input + cresult;
    for(var i = 0; i<4; i++){
      if(input.charAt(i) == answer.value.charAt(i)){
        finalResult += correctPosition;
      }else if(answer.value.indexOf(input.charAt(i)) != -1){
        finalResult += notCorrectPosition;
      }else{
        finalResult += wrongAnswer;
      }
    }
    finalResult += "</div></div>";
    document.getElementById("results").innerHTML += finalResult;
    return answer.value  == input  ? true:false;
}
function showAnswer(check){
  let code = document.getElementById("code");
  if(check){
    code.className += " success";
    code.innerHTML = answer.value;
  }else{
    code.className += " failure";
    code.innerHTML = answer.value;
  }
}

function showReplay(){
  document.getElementById("guessing-div").style.display = "none";
  document.getElementById("replay-div").style.display = "block";
}
