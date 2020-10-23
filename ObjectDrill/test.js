/*
// 1 Object initializers and methods

let loaf = {
    flour: 300,
    water: 210,
    hydration: function(){
        let value = (this.water / this.flour * 100)
        return value
    }
}
console.log(loaf.hydration())

// 2 Iterating over an object's properties
let rand = {
    foo: 12,
    bar: 34,
    fum: 56,
    quux: 78,
    spam: 90,
}
for (let key in rand){
    console.log(rand, rand.key)
}

// 3 Arrays in Objects
let meals = {
    value: [
        'breakfast',
        'second breakfast',
        'elevenses',
        'lunch',
        'afternoon tea',
        'dinner',
        'supper'
    ]
}

console.log(meals.value[3])



// 4 & 5 Arrays in Objects and Properties aren't there
// https://www.w3schools.com/js/js_object_constructors.asp
// How to add a new property to the constructor? Only internally?


function createPerson(name, jobTitle){
    return{
        name,
        jobTitle,
        isBoss: ""
    }
}

let person1 = createPerson("Inho", "Boss")
let person2 = createPerson("Josh", "Accountant")
let person3 = createPerson("Hayden", "Janitor")
let squad = [person1, person2, person3]

squad.forEach(function(value){
    console.log(value)
})

squad.forEach(function(value){
    if (value.jobTitle === "Boss"){
        value.isBoss = true
    }else{
        value.isBoss = false
    }
})
console.log(squad)


function findTheBoss(squadArray){
    let theBoss = squadArray.find(function(value){
        return value.isBoss === true
    }, null)
    return theBoss.name
}


squad.forEach(function(value){
    if(value.isBoss === true){
        console.log(`${value.jobTitle} ${value.name} doesn't report to anybody.` )
    }else if (value.isBoss === false){
        console.log(`${value.jobTitle} ${value.name} reports to ` + findTheBoss(squad))
    }
})



// 6 Cracking the code


function decode(word) {

    let codekey = {
        a: 2,
        b: 3,
        c: 4,
        d: 5,
    }
    let caselower = word.toLowerCase()
    let letters = caselower.split("")

    if (letters[0] === "a") {
        return (letters[2 - 1])
    } else if (letters[0] === "b") {
        return (letters[3 - 1])
    } else if (letters[0] === "c") {
        return (letters[4 - 1])
    } else if (letters[0] === "d") {
        return (letters[5 - 1])
    } else {
        return (" ")
    }
}  

function decodeWords(sentence){
    let message = ""
    let placeholder = ""
    
    let lower = sentence.toLowerCase()
    let wordArr = lower.split(" ")
    
  
    for (let i = 0; i < wordArr.length; i++){
      //console.log(wordArr[i])
      placeholder = decode(wordArr[i])
      //
      message += placeholder
    }
    console.log(placeholder)
  }

*/

// 7 Factory Functions with LOTR

function createCharacter(name, nickName, race, origin, attack, defense){
    return{
        name,
        nickName,
        race,
        origin,
        attack,
        defense,
        describe: function(){
            return (`${name} is a ${race} from ${origin}.`)
        },
        evaluateFight: function(){
            let x = 0
            let y = 0
            if ( (this.attack - monster.defense) > 0 ){
                x = this.attack - monster.defense
            }else{
                x = 0
            }

            if ( (monster.attack - this.defense) > 0 ){
                y = monster.attack - this.defense
            } else{
                y = 0
            }

            return (`Your opponent takes ${x} damage and you receive ${y} damage`)
        }
    };
}

const gandalf = createCharacter("Gandalf the White", "gandalf", "Wizard", "Middle Earth", 10, 6)


const bilbo = createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1)

const frodo = createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2)

const aragorn = createCharacter("Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8)

const legolas = createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5)

let characters = []

characters.push(gandalf)
characters.push(bilbo)
characters.push(frodo)
characters.push(aragorn)
characters.push(legolas)
console.log(characters)
const arwen = createCharacter("Arwen Undomiel", "arwen", "Half-Elf", "Rivendell", 6, 9)
characters.push(arwen)

let find = characters.find(function(value){
    return value.nickName === "aragorn"
})

console.log(find.describe)
