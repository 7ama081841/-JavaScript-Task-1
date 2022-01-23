let button = document.getElementById("button");
let returBtn = document.getElementById("retur");

let list = [
    { id: "1", name: "ahmed", status: "vacc" },
    { id: "2", name: "ahmed2", status: "enreg" },
    { id: "3", name: "ahmed3", status: "enreg" },
];
const list_vacc = document.getElementById("list_vacc");
const list_saved = document.getElementById("list_saved");
const abbi = () => {
    list_saved.innerHTML = "";
    list_vacc.innerHTML = "";
    list.forEach(({ name, status, id }) => {
        if (status === "enreg") {
            const li = ` <li>
        <div style='display:flex' >
        <p>${name}</p>
        <button onclick="vaccinPerson('${id}')" >vaccine</button>
        <button onclick="update('${id}')" >update</button>
        </div></li> `;
            list_saved.innerHTML += li;
        } else {
            const li = ` <li>
        <div style='display:flex' >
        <p>${name}</p>
        <button onclick="supprime('${id}')" >supprimer</button>
        </div></li> `;
            list_vacc.innerHTML += li;
        }
    });
};
const valueText = document.getElementById("text");
const ajout = () => {
    const personName = valueText.value;
    const generatedID = Date.now();
    const newPersonn = {
        name: personName,
        id: generatedID,
        status: "enreg",
    };
    list.push(newPersonn);
    abbi();

    valueText.value = "";
    valueText.focus();
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
    
    list.map((el) => {
        if (el.id == id) {
            newName.value = el.name ;
            
        }
    });

    returBtn.style.display = "block";
};

const update_2 = (id) => {
    let newName = document.getElementById("text");

    newName = newName.value;

    list.map((el) => {
        if (el.id == id) {
            el.name = newName;
        }
    });

    abbi();
};

function retur() {
    button.setAttribute("onclick", "ajout()");
    button.innerText = "Ajouter";
    returBtn.style.display = "none";
    valueText.value = "";
    
}
