// DARKMODE
let darkMode = document.querySelector("#darkmode-toggle");
let image = document.querySelector("#Blacktxtimg");

if(darkMode) {
  darkMode.addEventListener("click", e => {
    if(darkMode.checked){
        document.body.style.background = "#292929";
        document.body.style.color = "#F4F4F4";
        image.src = "img/Whitetxt.png";
        document.body.style.borderColor = "white";
    } else{
        document.body.style.background = "#FFFFFF";
        document.body.style.color = "#3a3a3a";
        image.src = "img/Blacktxt.png";
        document.body.style.borderColor = "black";

    }
  }
)}

//My array of questions and correctAnswers______________________________________
let questionsArray = [
{
     question: "Vilken sångerskas riktiga namn är Stefani Joanne Angelina Germanotta?",
     choice:["Sia","Lady Gaga","Kesha","Beyoncé"],
     correctAnswer:"Lady Gaga"
     },
    {
     question: "Succéserien Squid Game kommer från Sydkorea.",
     choice: ["Sant", "Falskt"],
      correctAnswer: "Sant"
    },
    {
     question: "Madonna's real name is Magdalena",
     choice: ["Sant", "Falskt"],
      correctAnswer: "Falskt" // Correct correctAnswer is Madonna. 
    },
    {
     question: "Vilken/vilka filmer har vunnit 11 Oscars",
     choice: [ "Sista sommaren","The Informer","Ben Hur", " Titanic"],
      correctAnswer: ["Ben Hur", " Titanic"]
    },
    {
     question: "Meryl Streep har vunnit två Academy Awards.",
     choice: ["Sant", "Falskt"],
      correctAnswer: "Falskt" // Correct correctAnswer is three. 
    },
    {
     question: "Vad heter Batmans butler?",
     choice: ["Henry","Robin", "Alfred", "Charles"],
      correctAnswer: "Alfred"
    },
    {
     question: "Vem eller vilka har spelat huvudkaraktären James Bond?",
     choice: ["Daniel Craig", " Pierce Brosnan", "Brad Pitt", " Sean Connery"],
      correctAnswer: ["Daniel Craig", " Pierce Brosnan", " Sean Connery"]
    },
    {
     question: "Hur många avsnitt finns det av serien Vänner?",
     choice: ["216 episodes", "226 episodes", "236 episodes", " 246 episodes"],
       correctAnswer: "236 episodes"
    },
    {
     question: "Harry Styles mellannamn är Edward.",
     choice: ["Sant", "Falskt"],
      correctAnswer: "Sant"
    },
    {
     question: "I Harry Potter har Draco Malfoy en lillasyster.",
     choice: ["Sant", "Falskt"],
     correctAnswer: "Sant"
    },
  ];
 
let totalScore = 0;
let maxPoints = 10;

// Get questions_________________________________________________________
questionsArray.forEach((obj,i) => {
  let p = document.createElement("h2");
  p.innerText = obj.question;
  document.body.append(p);

// Get choices, radio buttons, checkboxes________________________________
obj.choice.forEach((choice) => {
  let p = document.createElement("p");
  p.innerText = choice 
  document.body.append(p); 

let radioBtn = document.createElement("input");
// If correctAnswer is not an array --> radio button__________________________ 
// if correctAnswer is an array ---> checkbox_________________________________
    if (!Array.isArray(obj.correctAnswer) ) {
      radioBtn.type="radio";
    } else {
      radioBtn.type = "checkbox";
    }
    radioBtn.value = choice 
    p.append(radioBtn);

    radioBtn.name = `selectOnecorrectAnswer-${i}`;
  })
}); 
//________________________________________________________________

let submitBtn = document.createElement("button");

submitBtn.innerText = "Rätta";
document.body.append(submitBtn);

let p = document.querySelector("#score");
p = document.createElement("h2");
document.body.append(p)

submitBtn.addEventListener("click", () => {
  questionsArray.forEach((question, i) => {
    
    // if question === radio --> we count like this_______________
    if(!Array.isArray(question.correctAnswer)) {
      let usercorrectAnswer = document.querySelector(`[name='selectOnecorrectAnswer-${i}']:checked`).value
      if (usercorrectAnswer === question.correctAnswer) {
        totalScore++; 
        
      } else {
      }
// else question === checkbox --> we count like this__________
} else {  
  let isCheckBox = document.querySelectorAll(`[name='selectOnecorrectAnswer-${i}']:checked`);
  let checkboxList = [];
  isCheckBox.forEach((box) => {
    checkboxList.push(box.value);
  });
  
  let correctUsercorrectAnswers = checkboxList.filter(x => {
    return question.correctAnswer.includes(x)
  })

  if (correctUsercorrectAnswers.length === question.correctAnswer.length && checkboxList.length === question.correctAnswer.length ) {
      totalScore++;
  } else {
  }
  }

// RESULT______________________________________________________
     if(totalScore > maxPoints * 0.75) {
      p.style.color = "#1C8B0A";
      p.innerText = `${totalScore}/10. Vilken stjärna!`; 
  } else if (totalScore > maxPoints * 0.5) {
      p.style.color = "#BE6716";
      p.innerText = `${totalScore}/10. Inte så tokigt!`;
  } else {
      p.style.color = "#B71B1B";
      p.innerText = `${totalScore}/10. Bättre kan du!`;
  }
  return totalScore;
  
  });

})
  
// See correct answwers for each question___________________________
let showAnswers = document.querySelector("#answers");
let showCorrectAnswerBtn = document.createElement("button");

showCorrectAnswerBtn.innerText = "Visa rätta svaren";
document.body.append(showCorrectAnswerBtn, showAnswers);

showCorrectAnswerBtn.addEventListener("click", () => {
  if (showAnswers.innerHTML === "") {
    questionsArray.forEach((Q) => {
      showAnswers.innerHTML += 
    `<div>
      <h4>Fråga: ${Q.question}</h4>
      <p id="correctAnswer" >Svar: ${Q.correctAnswer}</p>
    </div>`;
    });
  } 
});
