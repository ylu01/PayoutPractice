const rates = {
    Straight: 35,
    Split: 17,
    Street: 11,
    "Double Street": 5,
    "Corner": 8
}

let questionText = {};
questionText = makeQuestion(rates);
console.log("------------------");
console.log(questionText.question);
console.log(questionText.answer);
document.getElementById("answer").innerHTML = "";
document.getElementById("answerButton").onclick = function() {reveal(questionText.answer)};
document.getElementById("questionButton").onclick = function() {questionText = makeQuestion(rates)};

function makeQuestion(obj){
    let text = "";
    let rand;
    let answer = 0;
    let br;
    document.getElementById("answer").innerHTML = "";
    for (const [key, value] of Object.entries(obj)) {
        
            if(key === "corner" || key === "splits"){
                rand = getRandomInt(21);
            }
            else{
                rand = getRandomInt(6);
                

            }
            if(rand){
                if(rand > 1)
                {
                    text += '<p id="redNumber">'  + rand + "</p> "+  "<p>" +key + "s</p>" +"<br>";
                }
                else{
                    text += '<p id="redNumber">'  + rand + "</p> "+  "<p>" +key + "</p>" +"<br>";
                }
                
            }
            
        answer += (rand * rates[key]);

        
        //console.log(`${key}: ${value}`);
      }
      document.getElementById("question").innerHTML = text;
      return {
          question: text,
          answer: answer
                };
}
function msg(){
    alert("wtf");
}
function reveal(answer){
    document.getElementById("answer").innerHTML = "Answer: " +answer;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
