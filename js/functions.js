const rates = {
    Straight: 35,
    Split: 17,
    Street: 11,
    "Double Street": 5,
    "Corner": 8
}

let questionText = {};
questionText = makeQuestion(rates);
document.getElementById("answerButton").onclick = function() {reveal()};
document.getElementById("questionButton").onclick = function() {questionText = makeQuestion(rates)};

function makeQuestion(obj){
    let text = "";
    let rand;
    let answer = 0;
    let br;
    hide();
    document.getElementById("answer").innerHTML = "";
    for (const [key, value] of Object.entries(obj)) {
        
            if(key === "Corner" || key === "Splits"){
                rand = getRandomInt(21);
            }
            else{
                rand = getRandomInt(6);
                

            }
            if(rand && rand > 1){
                text += '<p id="redNumber">'  + rand + "</p> "+  "<p>" +key + "s</p>" +"<br>";
            }
            else{
                if(rand != 0){
                    text += '<p id="redNumber">'  + rand + "</p> "+  "<p>" +key + "</p>" +"<br>";
                }
                
                }
                answer += (rand * rates[key]);
            }
            
        
        
        
        //console.log(`${key}: ${value}`);
      
      document.getElementById("question").innerHTML = text;
      document.getElementById("answer").innerHTML = "Answer: " +answer;
      return {
          question: text,
          answer: answer
                };
}
function hide(){
    document.getElementById("answer").style.visibility = "hidden";
}
function reveal(){
    document.getElementById("answer").style.visibility = "visible";
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
