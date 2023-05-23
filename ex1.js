const Food = {
    foodType: "ordinary"
}

const soup = Object.create(Food);
soup.soupName = "Borcsh"
soup.color = "red"

// console.log(soup)
// console.log(soup.foodType)

function getAllObjectFields(obj){
    console.log(`This function prints all properties of an object`)
    for(let key in obj) {
        console.log(`key -> ${key} ; value -> ${obj[key]}`)
    }
}

function getOwnObjectFields(obj){
    console.log(`This function prints only own properties of an object`)
    for(let key in obj) {
        if (obj.hasOwnProperty(key))
            console.log(`key -> ${key} ; value -> ${obj[key]}`)
    }
}

getAllObjectFields(soup)
getOwnObjectFields(soup)