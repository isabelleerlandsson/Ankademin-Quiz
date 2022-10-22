// DARKMODE
let darkMode = document.querySelector("#darkmode-toggle");

if(darkMode) {
  darkMode.addEventListener("click", e => {
    if(darkMode.checked){
        document.body.style.background = "black";
        document.body.style.color = "#FFFFFF";
    } else{
        document.body.style.background = "#FFFFFF";
        document.body.style.color = "#3a3a3a";
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
let quizQuestions = document.getElementById("questions");

questionsArray.forEach((obj,i) => {
  let p = document.createElement("p");
  p.innerText = obj.question;
  document.body.append(p);

// Svarsalternativ och radio buttons______________________________
  obj.choice.forEach((choice) => {
    let p = document.createElement("p");
    p.innerText = choice 
    document.body.append(p); 
    let radioBtn = document.createElement("input");
    radioBtn.type="radio";
    radioBtn.value = choice 
    p.append(radioBtn);

    radioBtn.name = `selectOneAnswer-${i}`;
  })
}); 

//________________________________________________________________