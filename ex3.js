const food = {
    foodType: "ordinary"
}

const soup = Object.create(food);
soup.soupName = "Borcsh"
soup.color = "red"

// console.log(soup)
// console.log(soup.foodType)

function getObjectWithoutProto(){
    return Object.create(null)
}

console.log(Object.getPrototypeOf(soup))
console.log(Object.getPrototypeOf(food))

zeroProto = Object.getPrototypeOf(food)
console.log(Object.getPrototypeOf(zeroProto))

zeroProto2=getObjectWithoutProto()
console.log(Object.getPrototypeOf(zeroProto2))
