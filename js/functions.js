const rates = {
    straights: 35,
    splits: 17,
    street: 11,
    doubleStreet: 5,
    corner: 8
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
        rand = getRandomInt(6);
        if(rand){
            if(key === "corner" || key === "splits"){
                rand = getRandomInt(21);
            }
            text += key + ":" + rand + "<br>";
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
    document.getElementById("answer").innerHTML = "The correct answer should be: " +answer;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }