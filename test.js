// Exercice 2
let input = document.querySelector("#Exercice-2");
let button = document.querySelector("button");
let regester = document.querySelector(".regester");
let Vaccinees = document.querySelector(".vaxine");
let missage = document.querySelector(".missage");

let persones = [];

function Enregistrées() {
    persones.push({
        id: persones.length + 1,
        name: input.value,
        satus: "Enregistrées",
    });

    if (input.value === "") {
        missage.innerText = "Entrez votre nom";
        return false;
    }

    if (persones[persones.length - 1].satus === "Enregistrées") {
        missage.innerText = "";
        regester.innerHTML += `<li id=" ${persones[persones.length - 1].id}"> ${
            persones[persones.length - 1].id
        } ${
            persones[persones.length - 1].name
        } <button onclick="check(event)">+</button> </li> `;
    }

    input.value = "";
    input.focus();

    // console.log(persones[persones.length - 1]);
}

function check(event) {
    let persone = event.target.parentElement.getAttribute("id");

    persones[persone - 1].satus = "Vaccinées";

    // console.log(persones[persone - 1]);

    if (persones[persone - 1].satus == "Vaccinées") {
        Vaccinees.innerHTML += `<li id=" ${persones[persone - 1].id}"> 
        ${persones[persone - 1].id}
        ${
            persones[persone - 1].name
        } <button onclick="supprimer_1(event)">supprimer</button> </li> `;

        event.target.parentElement.remove();
    }
}

function supprimer_1(event) {
    event.target.parentElement.remove();
}

// ________________________________________________________________________________

// Exercice 3
let file = document.querySelector(`[type="file"]`);
let text = document.querySelector("#Exercice-3");
let persons = document.querySelector(".persons");
let uploadImage = "";

function poster() {
    if (text.value == "" || file.value == "") {
        return false;
    }

    let reder = new FileReader();
    reder.addEventListener("load", () => {
        uploadImage = reder.result;

        persons.innerHTML += `<li> ${text.value} <div> <img src="${uploadImage}" alt=""> </div> <button onclick="supprimer_2(event)" >supprimer</button> </li> `;

        let li = document.querySelector(".persons li");

        return li;
    });
    reder.readAsDataURL(file.files[0]);

    file.value = "";
    
    li.innerText = text.value;
    
    text.value = "";
}

function supprimer_2(event) {
    event.target.parentElement.remove();
}
