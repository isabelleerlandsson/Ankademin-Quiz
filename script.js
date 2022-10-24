// DARKMODE
// QuerySelector och ändra scr. 
let darkMode = document.querySelector("#darkmode-toggle");
let image = document.querySelector("#Blacktxtimg");

if(darkMode) {
  darkMode.addEventListener("click", e => {
    if(darkMode.checked){
        document.body.style.background = "#292929";
        document.body.style.color = "#F4F4F4";
        image.src = "img/Whitetxt.png";
    } else{
        document.body.style.background = "#FFFFFF";
        document.body.style.color = "#3a3a3a";
        image.src = "img/Blacktxt.png";

    }
  }
)}
//Samtliga frågor/alternativ/svar_________________________________
let questionsArray = [
    {
     question: "Hur många program finns det på Ankademin?",
     choice:["Tre","Sex","Nio","Tolv"],
     answer:"Nio"
     },
    {
     question: "Ankademin ligger i Barcelona.",
     choice: ["True", "False"],
      answer: "False"
    },
    {
     question: "På Ankademin kan man läsa till Frontend Developer.",
     choice: ["True", "False"],
      answer: "True"
    },
    {
     question: "Vilken/vilka kända personer har gått på Ankademin?",
     choice: [ "1","2","3","4"],
      answer: ["2","3"]
    },
    {
     question: "På Ankademin börjar lektionerna alltid 07:00.",
     choice: ["True", "False"],
      answer: "False"
    },
    {
     question: "Ankademin erbjuder fem olika program att studera.",
     choice: ["True", "False"],
      answer: "True"
    },
    {
     question: "Varje fredag erbjuder Ankademin glass till sina elever.",
     choice: ["True", "False"],
      answer: "True"
    },
    {
     question: "Praktik är inget som Ankademin erbjuder i sina utbildningar.",
     choice: ["True", "False"],
      answer: "False"
    },
    {
     question: "Ankademin har funnits sedan 1925.",
     choice: ["True", "False"],
      answer: "False"
    },
    {
     question: "Ankademin erbjuder alla elever laptops.",
     choice: ["True", "False"],
     answer: "False"
    },
  ];
 
// Frågor_________________________________________________________
// let quizQuestions = document.getElementById("questions");
let p = document.querySelector("#score");
let totalScore = 0;
let maxPoints = 10;


questionsArray.forEach((obj,i) => {
  let p = document.createElement("p");
  p.innerText = obj.question;
  document.body.append(p);

// Svarsalternativ och radio buttons/checkbox______________________________
  obj.choice.forEach((choice) => {
    let p = document.createElement("p");
    p.innerText = choice 
    document.body.append(p); 
    let radioBtn = document.createElement("input");

  // Om answer inte har en array har alternativen en radiobutton. Om answer har en array så har alternativen en checkbox. 
    if (!Array.isArray(obj.answer) ) {
      radioBtn.type="radio";
    } else {
      radioBtn.type = "checkbox";
    }
    radioBtn.value = choice 
    p.append(radioBtn);

    radioBtn.name = `selectOneAnswer-${i}`;
  })
}); 

//________________________________________________________________

let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  questionsArray.forEach((question, i) => {
    
    // if question === radio --> we count like this. 
    if(!Array.isArray(question.answer)) {
      let userAnswer = document.querySelector(`[name='selectOneAnswer-${i}']:checked`).value
      if (userAnswer === question.answer) {
        totalScore++;
      } else {
      }

    // else question === checkbox --> we count like this.
    } else {  
    let isCheckBox = document.querySelectorAll(`[name='selectOneAnswer-${i}']:checked`);
    let checkboxList = [];
    isCheckBox.forEach((box) => {
      checkboxList.push(box.value);
    });

    let correctUserAnswers = checkboxList.filter(x => {
      return question.answer.includes(x)
    })

    if (correctUserAnswers.length === question.answer.length && checkboxList.length === question.answer.length ) {
        totalScore++;
    }
    }
  })
  
    // RESULT
  if(totalScore > maxPoints * 0.75) {
    p.style.color = "green";
    p.innerText = `${totalScore}/10. Mycket väl godkänd!`; 
} else if (totalScore > maxPoints * 0.5) {
    p.style.color = "orange";
    p.innerText = `${totalScore}/10. Godkänt!`;
} else {
    p.style.color = "red";
    p.innerText = `${totalScore}/10. Underkänt!`;
}
return totalScore;
})

