// Ex 1
function IntegerEnString(x) {

    if (typeof (x) === "object") {
        return " Erreur conversion impossible"
    } else {
        return x.toString()
    }
}

console.log(IntegerEnString({x : 45}))

// Ex 2
function sommeTableau(t) {
    var rez = 0;
    for (i = 0; i < t.length; i++) {
        rez += t[i]
    }
    return rez
}

console.log(sommeTableau([1, 2, 3, 4 , 50]))

// Ex 3
function moyenneTableau(T) {
    var rez = 0;
    for (i = 0; i < T.length; i++) {
        rez += T[i]
    }
    return rez / T.length
}

console.log(moyenneTableau([1,2,3,4]))



frontEnd = [

    {
        id: 1,
        first: "ahmed",
        last: "ben ali",
        age: 23,
        email: "ahmed.benali@gmail.com",
        address: "Tunis"
    },
    {
        id: 2,
        first: "aziz",
        last: "ameri",
        age: 44,
        email: "aziz.benali@gmail.com",
        address: "Tunis"
    },
    {
        id: 3,
        first: "khalil",
        last: "ben lamine",
        age: 18,
        email: "khalil.benali@gmail.com",
        address: "Tunis"
    }
]

backEnd = [

    {
        id: 1,
        first: "khalil",
        last: "ben ali",
        age: 23,
        email: "khalil.benali@gmail.com",
        address: "Tunis"
    },
    {
        id: 2,
        first: "ahmed",
        last: "ameri",
        age: 4,
        email: "ahmed.benali@gmail.com",
        address: "Tunis"
    }
]

// Ex 4
function getUserById(users, id) {

    switch (id) {
        case 1:
            return users[0]
            break;
        case 2:
            return users[1]
            break;
        case 3:
            return users[2]
            break;
        default:
            return "pas d’utilisateur avec cet ID"
    }

}

console.log(getUserById(frontEnd, 2))

// Ex 5
function sortUsers(users) {

    rez = []

    if (users[0].age < users[1].age ) {
        rez.push(users[0].first)
        rez.push(users[1].first)
    } else {
        rez.push(users[1].first)
        rez.push(users[0].first)
    }

    return rez ;
}


console.log(sortUsers(backEnd))