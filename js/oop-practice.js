// // STEP 1
// function Cat() {

// }

// function Dog() {

// }
// // STEP 2
// const newCat =function Cat() {

// }

// const newDog= function Dog() {

// }

// // STEP 3
// function Animal(displayMsg) {
//     this.displayMsg= "This Animal has been created."
// }

// console.log(Cat.displayMsg)

// // STEP 4
// function Animal(animalName) {
//     this.animalName= animalName
// }

// const Cname = new Animal('Luka')
// console.log(Cname.animalName)				


// STEP 5
class Animal {
    constructor(type,breed, color, height, lenght) {
        this._type = type
        this._breed = breed
        this._color = color
        this._height = height
        this._lenght = lenght
    }
}

const Cookie= new Animal('Dog','Maltipoo','White','6in','10in')

// STEP 6
for (const props in Cookie) {
    console.log(`${Animal[props]}`)
}

// STEP 7
class Speak{
    
}
// STEP 8

// STEP 9