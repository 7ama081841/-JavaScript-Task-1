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
        regester.innerHTML += `<li id="${persones[persones.length - 1].id}"> ${
            persones[persones.length - 1].id
        } ${persones[persones.length - 1].name} <button onclick="check('${
            persones[persones.length - 1].id
        }')">+</button> </li> `;
    }

    input.value = "";
    input.focus();

    console.log(persones[persones.length - 1]);
    console.log(persones);
}

function check(persone) {
    persones[persone - 1].satus = "Vaccinées";

    console.log({ persone });

    if (persones[persone - 1].satus === "Vaccinées") {
        Vaccinees.innerHTML += `<li id="${persones[persone - 1].id}"> 
        ${persones[persone - 1].id}
        ${
            persones[persone - 1].name
        } <button onclick="supprimer_1(event)">supprimer</button> </li> `;

        document.getElementById(persone).remove();
    }
}

function supprimer_1(event) {

    console.log(event.target.parentElement.id);
    event.target.parentElement.remove();

    

}

// ________________________________________________________________________________

// Exercice 3
let file = document.querySelector(`[type="file"]`);
let text = document.querySelector("#Exercice-3");
let persons = document.querySelector(".persons");
let uploadImage = "";

async function poster() {
    if (text.value == "" || file.value == "") {
        return false;
    }

    let reder = await new FileReader();
    await reder.addEventListener("load", () => {
        const uploadImage = reder.result;
        persons.innerHTML += `<li id='ezfzejnfj'> ${text.value} <div> <img width="100%" heigth="100%" src="${uploadImage}" alt=""> </div> <button onclick="supprimer_2(event)" >supprimer</button> </li> `;
        
        text.value = "";
        file.value = "";
        
    });

    await reder.readAsDataURL(file.files[0]);

}

function supprimer_2(event) {
    event.target.parentElement.remove();
}
