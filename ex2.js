const food = {
    foodType: "ordinary"
}

const soup = Object.create(food);
soup.soupName = "Borcsh"
soup.color = "red"

// console.log(soup)
// console.log(soup.foodType)

function KeyExists(obj,string){
    return !(obj[string] === undefined)
}

console.log('color ', KeyExists(soup, "color"))
console.log('taste ', KeyExists(soup, "taste"))
