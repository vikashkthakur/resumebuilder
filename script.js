function addNewWEField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");


    let weob = document.getElementById("we");
    let weAddButtonob = document.getElementById("weAddButton");

    weob.insertBefore(newNode, weAddButtonob);

}



function addNEWAQField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");


    let aqob = document.getElementById("aq");
    let aqAddButtonob = document.getElementById("aqAddButton");

    aqob.insertBefore(newNode, aqAddButtonob);
}




function addNEWPQField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("pqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");


    let pqob = document.getElementById("pq");
    let pqAddButtonob = document.getElementById("pqAddButton");

    pqob.insertBefore(newNode, pqAddButtonob);
}



function addNEWSQField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("sqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");


    let sqob = document.getElementById("sq");
    let sqAddButtonob = document.getElementById("sqAddButton");

    sqob.insertBefore(newNode, sqAddButtonob);
}




//generating cv
function generateCV() {

    // let nameField=document.getElementById("nameField").Value;
    // let nameT1=document.getElementById("nameT1");
    //nameT1.innerHTML=nameField;
    //document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById('nameT1').innerHTML = document.getElementById('nameField').value;

    document.getElementById('nameT2').innerHTML = document.getElementById('nameField').value;

    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

    document.getElementById('emailT').innerHTML = document.getElementById('emailField').value;

    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value;

    document.getElementById('githubT').innerHTML = document.getElementById('GithubField').value;

    //object generation
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;


    //work experience
    let wes = document.getElementsByClassName('weField')
    let str = ''

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;

    //academic qualification
    let aqs = document.getElementsByClassName('aqField')
    let str1 = ''

    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = str1;

    //projects generation
    let pqs = document.getElementsByClassName('pqField')
    let str2 = ''

    for (let e of pqs) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById('pqT').innerHTML = str2;

    //skill generation
    let sqs = document.getElementsByClassName('sqField')
    let str3 = ''

    for (let e of sqs) {
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById('sqT').innerHTML = str3;



    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';

}

function printCV() {
    window.print();
}
