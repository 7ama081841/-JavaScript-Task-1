const file = document.getElementById("file");
const text = document.getElementById("text");
const button = document.getElementById("button");
const retur_btn = document.getElementById("retur");
const list_saved = document.getElementById("list_saved");
const list_vacc = document.getElementById("list_vacc");
let setImage = document.getElementById("setImage");

var updateImage = "";
let list = [];

const aabi = () => {
    list_saved.innerHTML = "";
    list_vacc.innerHTML = "";
    list.forEach(({ id, name, status, url }) => {
        if (status === "enreg") {
            const li = `<li id="${id}" >
        <div style='display:flex' >
        <div> <img src="${url} " /> </div>
        <p>${name}</p>
        <div class="buttons" >
            <button onclick="vaccinPerson('${id}')">vaccine</button>
            <button onclick="update('${id}')" >update</button>
        </div>
        </div></li>`;
            list_saved.innerHTML += li;
        } else {
            const li = ` <li id="${id}" >
        <div style='display:flex' >
        <div><img src=" ${url} " /></div>
        <p>${name}</p>
        <button onclick="supprime('${id}')" >supprimer</button>
        </div></li> `;
            list_vacc.innerHTML += li;
        }
        changeImage();
    });
};

const changeImage = () => {
    const reader = new FileReader();
    reader.onloadend = () => {
        updateImage = reader.result;
        setImage.src = updateImage;
    };
    reader.readAsDataURL(file.files[0]);
};

const ajout = () => {
    if (file.value == "" || text.value == "") {
        return false;
    }

    list.push({
        id: Date.now(),
        name: text.value,
        status: "enreg",
        url: updateImage,
    });
    aabi();

    // file.focus()
    // file.value = "";
    // text.value = "";
    // setImage.url = ""
    console.log(list);
};

const vaccinPerson = (idd) => {
    list.forEach((el) => {
        if (el.id == idd) {
            el.status = "vacc";
        }
    });
    aabi();
};

const update = (idd) => {
    let newName = list.find((o) => o.id == idd).name;
    let newImage = list.find((o) => o.id == idd).url;
    text.value = newName;
    // setImage = newImage;
    button.innerText = "update";

    button.onclick = (e) => {
        list = list.map((e) => {
            if (e.id == idd) {
                e.name = text.value;
                e.url = updateImage;
                // e.id = idd;
                // e.status = "enreg";
            }
            return e;
        });

        button.innerText = "Ajouter";
        text.value = "";
        button.onclick = ajout();
        aabi();
    };
};

const supprime = (idd) => {
    list = list.filter(({ id }) => !(id == idd));
    console.log(list);
    aabi();
};
