var q1El= document.getElementById("qone");
var q2El= document.getElementById("qtwo");
var q3El= document.getElementById("qthree");
var q4El= document.getElementById("qfour");
var quesEl = document.getElementById("ques")
var timerEl = document.getElementById("timer");
var h1El = document.getElementById("h1tag");
var listgroupEl = document.getElementById("list-group");

var counter = 3;

function timeIt (){
    counter--
    timerEl.innerText = counter 
  
}
setInterval(timeIt, 1000);

    
function main(){

    if ( questions.length ===0) {

            alert("you win!")
        }
          
    i = Math.floor(Math.random()*questions.length)
    quesEl.innerHTML = questions[i].title;  
    q1El.innerHTML = questions[i].choices[0]
    q2El.innerHTML = questions[i].choices[1]
    q3El.innerHTML = questions[i].choices[2]
    q4El.innerHTML = questions[i].choices[3]
};

main();

    q1El.addEventListener("click",function() {

        if(q1El.innerHTML===questions[i].answer){
            questions.splice(i,1);
            main();
            console.log(i);
            
        }else{

            counter = counter - 15;
        }
     });
     
     q2El.addEventListener("click",function() {
     
        if(q2El.innerHTML===questions[i].answer) {
            questions.splice(i,1);
            main();
            console.log(i);  
        }else{

            counter = counter - 15;
        }
      });
     
      
      q3El.addEventListener("click",function() {
     
        if(q3El.innerHTML===questions[i].answer) {
            questions.splice(i,1);
            main();
            console.log(i);
            
        } else{

            counter = counter - 15;
        }
      });
     
      q4El.addEventListener("click",function() {
     
        if(q4El.innerHTML===questions[i].answer) {
            questions.splice(i,1);
            main();
            console.log(i);
            
        }else{

            counter = counter - 15;
        }
      });
    
    








