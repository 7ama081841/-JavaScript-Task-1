let button = document.getElementById("button");
let returBtn = document.getElementById("retur");
let file = document.querySelector("#file");
const valueText = document.getElementById("text");
let uploadImage = "";

let list = [
    // { id: "1", name: "ahmed", status: "vacc" },
    // { id: "2", name: "ahmed2", status: "enreg" },
    // { id: "3", name: "ahmed3", status: "enreg", },
];
const list_vacc = document.getElementById("list_vacc");
const list_saved = document.getElementById("list_saved");
const abbi = () => {
    // list_saved.innerHTML = "";
    // list_vacc.innerHTML = "";
    list.forEach(({ name, status, id, url }) => {
        if (status === "enreg") {
            const li = ` <li>
        <div style='display:flex' >
        <div> <img src="${url} " /> </div>
        <p>${name}</p>
        <button onclick="vaccinPerson('${id}')">vaccine</button>
        <button onclick="update('${id}')" >update</button>
        </div></li> `;
            list_saved.innerHTML += li;
        } else {
            const li = ` <li>
        <div style='display:flex' >
        <div> <img src=" ${url} " /> </div>
        <p>${name}</p>
        <button onclick="supprime('${id}')" >supprimer</button>
        </div></li> `;
            list_vacc.innerHTML += li;
        }
    });
};

const formatFileToURL = (file, collback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        collback(reader.result);
    };
};

const image = file.files[0];
const functiono5ra = (url) => {
    const personeName = valueText.value;
    const personeId = Date.now();
    const newPersonn = {
        name: personeName,
        id: personeId,
        image: url,
        status: "enreg",
    };
    console.log({url : newPersonn.image});
    list.push(newPersonn);
    abbi();
};


const ajout = (newPersonn) => {
    formatFileToURL(file.files[0] , functiono5ra);
    console.log(list);
};

const vaccinPerson = (idPerson) => {
    // console.log({ idPerson });
    list.forEach((element) => {
        if (element.id == idPerson) {
            element.status = "vacc";
        }
    });
    abbi();
};

const supprime = (idd) => {
    list = list.filter(({ id }) => !(id == idd)); // for delet object from array
    abbi();
    valueText.value = "";
    // console.log(list);
};

const update = (id) => {
    button.setAttribute("onclick", `update_2(${id})`);
    button.innerText = "update";
    let newName = document.getElementById("text");

    list.forEach((el) => {
        if (el.id == id) {
            newName.value = el.name;
        }
    });

    returBtn.style.display = "block";
};

const update_2 = (id) => {
    let newName = document.getElementById("text");

    newName = newName.value;

    list.forEach((el) => {
        if (el.id == id) {
            el.name = newName;
        }
    });

    abbi();

    valueText.value = "";
};

function retur() {
    button.setAttribute("onclick", "ajout()");
    button.innerText = "Ajouter";
    returBtn.style.display = "none";
    valueText.value = "";
}

// // function for files

// async function poster() {

//     let reder = await new FileReader();
//     await reder.addEventListener("load", () => {
//         const uploadImage = reder.result;

//         console.log("rahi temchi")

// persons.innerHTML += `<li id='ezfzejnfj'> ${text.value} <div> <img width="100%" heigth="100%" src="${uploadImage}" alt=""> </div> <button onclick="supprimer_2(event)" >supprimer</button></li> `;

//         text.value = "";
//         file.value = "";
//     });

//     await reder.readAsDataURL(file.files[0]);
// }

// console.log(file)
