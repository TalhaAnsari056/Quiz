var data = [
    {
        Q_1: "Q-1.  What is JS ?",
        option: ['Java Script', 'java Smart', 'java Style', 'Server Query ',],
        Ans: 'Java Script',
    },
    {
        Q_1: "Q-2.  What is HTML ?",
        option: ['Hypertext Markup Language', 'Server Query ',],
        Ans: 'Hypertext Markup Language',
    },
    {
        Q_1: "Q-3.  What is SQL ?",
        option: ['python', 'Structured Query Language', 'mongoDB', 'express',],
        Ans: 'Structured Query Language',
    },
    {
        Q_1: "Q-4.  What is CSS ?",
        option: ['Ali baba', 'Machine Learninng', 'Cascading Style Sheets', 'Cyber security',],
        Ans: 'Cascading Style Sheets',
    },
    {
        Q_1: " Q-5.  What is Python ?",
        option: ['A programming language', 'use in backend ', 'a & b both',],
        Ans: 'a & b both',
    },
    {
        Q_1: " Q-6.  Which of the following is a programming language ?",
        option: ['C #', 'Mongo DB', 'Express', 'Machine Learning',],
        Ans: 'C #',
    },
    {
        Q_1: " Q-7.  Alternative word of function in programming language ?",
        option: ['Default method ', 'Predefine method ', 'a & b both', 'Method'],
        Ans: 'Method',
    },
    {
        Q_1: " Q-8.  What is Junk Artifact ?",
        option: ['Error', 'White Space', 'Conflict', 'un-wanted Space'],
        Ans: 'White Space',
    },
    {
        Q_1: " Q-9.  Point out the spread operator .",
        option: ['...', '||', '&', '= = ='],
        Ans: '...',
    },
    {
        Q_1: " Q-10.  Choose the binary operator among the following .",
        option: ['Address oprator', 'And operator', '#', 'Asteric'],
        Ans: 'And operator',
    },
    {
        Q_1: " Q-11.  DOM stands for what ? ",
        option: ['Document Object Model', 'Document Of Model', 'Decision Of Marriage',],
        Ans: 'Document Object Model',
    },
    {
        Q_1: " Q-12.  Latest version of CSS .",
        option: ['CCS 1', 'CSS 2', 'CSS 3', 'CSS 4'],
        Ans: 'CSS 4',
    },
];
var mainDiv = document.getElementsByClassName("mainContainer")[0];
var resultDiv = document.getElementsByClassName("resultDiv")[0];
var btn = document.getElementsByClassName("btn")[0];
var score = 0;
var calculate = () => {
    var radios = document.getElementsByTagName("input");
    for (var k = 0; k < radios.length; k++) {
        // console.log("radios:", radios[k].value );
        if (radios[k].checked) {
            console.log(radios[k].value);

            for (let i = 0; i < data.length; i++) {
                // console.log(data[i].Ans);
                if (radios[k].value === data[i].Ans) {
                    score++;
                }
                console.log(score);
            }
        }
        // if (!radios[k].checked) {
        //     alert("please select options")
        //     return;
        // }
    }
    var resultSp = document.getElementsByClassName("resultSp")[0];
    console.log("hi");
    btn.style.display = "none";
    mainDiv.style.display = "none";
    console.log(score);
    resultSp.innerText = "  " + score;
    resultDiv.innerText = "Your score is : " + "";
}

var qopDiv = document.getElementsByClassName("qopDiv")[0];
for (var i = 0; i < data.length; i++) {
    var randomID = Math.floor((Math.random() * 1000 + Number((new Date().getTime().toString()).slice(-4))));
    // mainDiv.innerHTML =+ qopDiv
    // mainDiv.innerHTML += `
    // <div class="qopDiv">
    // </div>
    // </br>`
    var qopDiv = document.createElement("div");
    qopDiv.setAttribute("class", "qopDiv");
    mainDiv.appendChild(qopDiv);
    // <div class="qDiv">${data[i].Q_1}
    // </div></br>
    var qDiv = document.createElement("div");
    qDiv.setAttribute("class", "qDiv");
    qDiv.innerText = data[i].Q_1;
    var qbrDiv = document.createElement("br");
    var qqbrDiv = document.createElement("br");
    qDiv.appendChild(qqbrDiv);
    qDiv.appendChild(qbrDiv);

    qopDiv.appendChild(qDiv);

    var opDiv = document.createElement("div");
    opDiv.setAttribute("class", "opDiv");
    //    mainDiv.appendChild(opDiv);
    // var opDiv = document.getElementsByClassName("opDiv")[0];
    for (var j = 0; j < data[i].option.length; j++) {
        var label_1 = Math.floor((Math.random() * 100000 + Number((new Date().getTime().toString()).slice(-4))));
        opDiv.innerHTML += `
        <input type="radio"  value="${data[i].option[j]}" id="${label_1}" name="${randomID}">
        <label for="${label_1}" >${data[i].option[j]}</label>
        </br>`
    }
    qopDiv.appendChild(opDiv);
    var brDiv = document.createElement("br");
    opDiv.appendChild(brDiv);
    // var qopbrDiv = document.createElement("br");
    // qopDiv.appendChild( qopbrDiv);
}
