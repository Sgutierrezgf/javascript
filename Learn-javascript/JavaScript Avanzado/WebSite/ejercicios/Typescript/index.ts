// Boolean
let muted: boolean = true;
muted = false;
// muted = "callado";

// Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//Strings
let nombre: string = 'Sebastian'
let saludo = `Me llamo ${nombre}`

//Arreglo
let people: string[] = [];
people = ["Isabel","Raul","laura"]
// people.push("Andres")

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push("Karla"); 
peopleAndNumbers.push(9000); 

//Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Verde
console.log(`Mi color favorito es ${colorFavorito}`)

//Any

let comodin = "Joker"
comodin = {type: 'Wildcar'}

//Object
let someObject: object = {type: 'Wildcard'}

//Function
function add(a: number, b: number){
    return a + b;
}

const SUM = add(4,6)

function createAdder(a:number): (number) => number{
    return function (b:number){
        return b + a
    }
}

const ADDFOUR = createAdder(4)
const FOURPLUS6 = ADDFOUR(6)

function fullName(firstName: string, lastName: string = 'Gutierrez'): string{
    return `${firstName} ${lastName}`
}
const SEBAS = fullName('Sebastian')
console.log('Gutierrez')

// Interfaces
enum Color {
    Rojo = "Rojo",
    Verde = "verde"
}
interface Rectangulo {
    ancho: number
    alto: number
    Color: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6
}

function area(r: Rectangulo){
    return r.alto * r.ancho
}
const AREARECT = area(rect)
console.log(AREARECT)

rect.toString = function (){
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}