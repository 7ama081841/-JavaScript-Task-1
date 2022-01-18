let input = document.querySelector("input");
let button = document.querySelector("button");
let regester = document.querySelector(".regester");
let Vaccinees = document.querySelector(".vaxine");

let persones = [];

function Enregistrées() {
    persones.push({
        id: persones.length + 1,
        name: input.value,
        satus: "Enregistrées",
    });

    if (persones[persones.length - 1].satus === "Enregistrées") {
        regester.innerHTML += `<li id=" ${persones[persones.length - 1].id}"> ${
            persones[persones.length - 1].id
        } ${
            persones[persones.length - 1].name
        } <button onclick="check(event)">+</button> </li> `;
    }

    input.value = ""
    input.focus()

    console.log(persones[persones.length - 1]);

}

function check(event) {

    let persone = event.target.parentElement.getAttribute("id");

    persones[persone - 1].satus = "Vaccinées";
    
    console.log(persones[persone - 1]);

    if (persones[persone - 1].satus == "Vaccinées") {
        Vaccinees.innerHTML += `<li id=" ${persones[persone - 1].id}"> 
        ${persones[persone - 1].id}
        ${
            persones[persone - 1].name
        } <button onclick="supprimer(event)">supprimer</button> </li> `;

        event.target.parentElement.remove()

    }

}

function supprimer(event) {
    event.target.parentElement.remove()
}
