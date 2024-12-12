var data = [
    {
        Q_1: "Q-1.  What is JS",
        option: [
            'Java Script',
            'java Smart',
            'java Style',
            'Server Query ',
        ],
    },
    {
        Q_1: "Q-2.  What is HTML",
        option: [

            'Hyper Text Markup Language',

            'Server Query ',
        ],
    },
    {
        Q_1: "Q-3.  What is SQL",
        option: [
            'python',
            'Server Query Language',
            'mongoDB',
            'express',
        ],
    },
    {
        Q_1: "Q-4.  What is CSS",
        option: [
            'Ali baba',
            'Machine Learninng',
            'Cascading Style Sheets',
            'Cyber security',
        ],
    },
    {
        Q_1: " Q-5.  What is Python",
        option: [
            'A programming language',
            'use in backend ',
            'a & b both',

        ],
    },
]
var mainDiv = document.getElementsByClassName("mainContainer")[0];
var qDiv = document.getElementsByClassName("qDiv")[0];

for (var i = 0; i < data.length; i++) {
    var randomID = Math.floor((Math.random() * 1000 + Number((new Date().getTime().toString()).slice(-4))));
    // var label_2 = Math.floor((Math.random() * 100000 + Number((new Date().getTime().toString()).slice(-4))));
    // var label_3 = Math.floor((Math.random() * 1000000 + Number((new Date().getTime().toString()).slice(-4))));
    // var label_4 = Math.floor((Math.random() * 10000000 + Number((new Date().getTime().toString()).slice(-4))));
    mainDiv.innerHTML += `<div class="qDiv">${data[i].Q_1}</div></br>`;
    var opDiv = document.createElement("div");
    mainDiv.appendChild(opDiv);

    for (let j = 0; j < data[i].option.length; j++) {
        var label_1 = Math.floor((Math.random() * 10000 + Number((new Date().getTime().toString()).slice(-4))));
        opDiv.innerHTML += `
        <input type="radio" id="${label_1}" name="${randomID}">
        <label for="${label_1}" >${data[i].option[j]}</label>
        </br>
        `
        // console.log("label_1",label_1 );
        // console.log("randomId_1",randomID);
    }
    var brDiv = document.createElement("br");
    opDiv.appendChild(brDiv);
    // console.log("randomId_2",randomID);
}