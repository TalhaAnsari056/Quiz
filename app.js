var resultDiv = document.getElementsByClassName("resultDiv")[0];
var btn = document.getElementsByClassName("btn")[0];
var score = 0;
// var boolean = false;
var calculate = () => {
    var radios = document.getElementsByTagName("input");
    for (var k = 0; k < radios.length; k++) {
        // console.log("radios:", radios[k].value );
        if (radios[k].checked) {
            console.log(radios[k].value);

            for (var m = 0; m < data.length; m++) {
                // console.log(data[i].Ans);
                if (radios[k].value === data[m].Ans) {
                    score++;
               
                }
            }
            console.log(score);
            // if(boolean === false){
            //     resultDiv.innerText += "question"+data[m].Q_1 +"  "+" right answer is : " + data[m].Ans ;
               
            // }
        }
        // if (!radios[k].checked) {
        //     alert("please select options")
        //     return;
        // }
    }
    console.log("hi");
    btn.style.display = "none" ;
    mainDiv.style.display = "none" ;
    resultDiv.innerText += "Your score is :" + " " + score ;
}
var data = [
    {
        Q_1: "Q-1.  What is JS",
        option: ['Java Script', 'java Smart', 'java Style', 'Server Query ',],
        Ans: 'Java Script',
    },
    {
        Q_1: "Q-2.  What is HTML",
        option: ['Hypertext Markup Language', 'Server Query ',],
        Ans: 'Hypertext Markup Language',
    },
    {
        Q_1: "Q-3.  What is SQL",
        option: ['python', 'Structured Query Language', 'mongoDB', 'express',],
        Ans: 'Structured Query Language',
    },
    {
        Q_1: "Q-4.  What is CSS",
        option: ['Ali baba', 'Machine Learninng', 'Cascading Style Sheets', 'Cyber security',],
        Ans: 'Cascading Style Sheets',
    },
    {
        Q_1: " Q-5.  What is Python",
        option: ['A programming language', 'use in backend ', 'a & b both',],
        Ans: 'a & b both',
    },
];
var mainDiv = document.getElementsByClassName("mainContainer")[0];
var qDiv = document.getElementsByClassName("qDiv")[0];

for (var i = 0; i < data.length; i++) {
    var randomID = Math.floor((Math.random() * 1000 + Number((new Date().getTime().toString()).slice(-4))));
    mainDiv.innerHTML += `<div class="qDiv">${data[i].Q_1}</div></br>`;
    var opDiv = document.createElement("div");
    mainDiv.appendChild(opDiv);

    for (let j = 0; j < data[i].option.length; j++) {
        var label_1 = Math.floor((Math.random() * 10000 + Number((new Date().getTime().toString()).slice(-4))));
        opDiv.innerHTML += `
        <input type="radio" id="${label_1}" value="${data[i].option[j]}" name="${randomID}">
        <label for="${label_1}" >${data[i].option[j]}</label>
        </br>
        `
       
    }
    var brDiv = document.createElement("br");
    opDiv.appendChild(brDiv);
  
}
