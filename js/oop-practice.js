// // STEP 1
// function Cat() {
//     constructor() 

// }

// function Dog() {
//     constructor() 
    
// }

// // STEP 2
// const newCat =new Cat('Macarena') 
// const newDog= new Dog('Cookie') 


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


// // STEP 5
// class Animal {
//     constructor(type,breed, color, height, lenght) {
//         this._type = type
//         this._breed = breed
//         this._color = color
//         this._height = height
//         this._lenght = lenght
//     }
// }

// const Cookie= new Animal('Dog','Maltipoo','White','6in','10in')

// // STEP 6
// for (const props in Cookie) {
//     console.log(`${Animal[props]}`)
// }

// // STEP 7
// class Animal {
//     constructor(type,breed, color, height, lenght) {
//         this._type = type //properties (atributes)
//         this._breed = breed
//         this._color = color
//         this._height = height
//         this._lenght = lenght
//     }
//     Speak() {
//         if (this._type== 'Dog') {
//             return `The ${this._color} dog is barking!`
//         } else {
//             return `The ${this._color} cat is meowing!`
//         }
        
//     }
// }
// let Cookie= new Animal('Dog','Maltipoo','White','6in','10in')
// console.log(Cookie.Speak())

// // STEP 8
// class Animal {
//     constructor(type,breed, color, height, lenght) {
//         this.type = type //properties (atributes)
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.lenght = lenght
//     }
//     Speak() {
//         if (this.type== 'Dog') {
//             return `The ${this.color} dog is barking!`
//         } else {
//             return `The ${this.color} cat is meowing!`
//         }
//     }
//     checkType() {
//         if (this.type== 'Dog') {
//             return `The ${this.type} has made a noise!`
//         } else {
//             return `The ${this.type} has made a noise!`
//         }

//     }
// }
// let Cookie= new Animal('Dog','Maltipoo','White','6in','10in')
// console.log(Cookie.checkType())


// // STEP 9
// const str= "The dog has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes.[5] Dog breeds vary widely in shape, size, and color. They perform many roles for humans, such as hunting, herding, pulling loads, protection, assisting police and the military, companionship, therapy, and aiding disabled people"
// function findWord(word) {
//     let numwrds= str.split(' ')
//     for (let i = 0 , i < numwrds, i++) {
//         if numwrds[i] = word {
//             let twrds= twrds++
//         }
//     }
// }
// console.log(findWord('dog'))
