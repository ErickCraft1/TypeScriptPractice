const persona = {
    name: 'Pepe',
    age: '29'
}

persona.name

// function

// function saludar(name:string) {
//     console.log(`Hola ${name}`);

// }

// saludar('Pepe')

// // function saludar({name, age} : {name: string, age: number}) { // forma 1
// function saludar(persona: { name: string, age: number }) { // forma 2
//     const { name, age } = persona
//     console.log(`Hola ${name}, tienes ${age}`);
// }

// saludar({ name: 'Pepe', age: 2 })

// function saludar({ name, age }: { name: string, age: number }):string {
//     console.log(`Hola ${name}, tienes ${age}`);
//     return age
// }

// const sayHiFunction = (fn: (name: string) => void) => {
//     return fn('Miguel')
// }

// sayHiFunction((name: string) => {
//     console.log(`Hola ${name}`);

// })

// tipar las arrow function
// const sumar = (a: number, b: number): number => {
//     return a + b
// } //forma 1

// const sumar2: (a: number, b: number) => number = (a, b) => {
//     return a + b
// } // forma 2

// never 

// function throwError(message: string):never  {
// throw new Error(message)
// }


// inferencia funciones anonimas segun el contexto
// const avengers = ['Spidey', 'Hulk', 'Avengers']

// avengers.forEach(avenger => {
//     console.log(avenger.toUpperCase());
// })

// Objetos

// let hero = {
//     name: 'Thor',
//     age: 1000
// }

// function createHero(name: string, age: number) {
//     return {name,age}
// }

// const thor = createHero('Thor', 1500)

// Type Alias

// type Hero = {
//     name: string
//     age: number
// }

// let hero: Hero = {
//     name: 'Thor',
//     age: 1000
// }

// function createHero(hero: Hero): Hero {
//     const { name, age } = hero
//     return { name, age }
// }

// const thor = createHero({ name: 'Thor', age: 1500 })

//template union types

// type HexadecimalColor =  `#${string}`

// const color: HexadecimalColor = '0033ff' // hexadecimales
// const color2: HexadecimalColor = '#0033ff' // hexadecimales

// Optional Properties

// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//     readonly id?: HeroId
//     name: string
//     age: number
//     isActive?: boolean
// }

// let hero: Hero = {
//     name: 'Thor',
//     age: 1000
// }

// function createHero(hero: Hero): Hero {
//     const { name, age } = hero
//     return { id: crypto.randomUUID(), name, age, isActive: true }
// }

// const thor = createHero({ name: 'Thor', age: 1500 })

// Union Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galatic' | 'universal' | 'multiversal'

// type Hero = {
//     readonly id?: HeroId
//     name: string
//     age: number
//     isActive?: boolean
//     powerScale?: HeroPowerScale
// }

// let hero: Hero = {
//     name: 'Thor',
//     age: 1000
// }

// function createHero(hero: Hero): Hero {
//     const { name, age } = hero
//     return { id: crypto.randomUUID(), name, age, isActive: true }
// }

// const thor = createHero({ name: 'Thor', age: 1500 })

// thor.powerScale = 'planetary'

// Intersection Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galatic' | 'universal' | 'multiversal'

// type HeroBasicInfo = {
//     name: string
//     age: number
// }

// type HeroProperties = {
//     readonly id?: HeroId
//     isActive?: boolean
//     powerScale?: HeroPowerScale
// }

// type Hero = HeroBasicInfo & HeroProperties

// let hero: Hero = {
//     name: 'Thor',
//     age: 1000
// }

// function createHero(info: HeroBasicInfo): Hero {
//     const { name, age } = info
//     return { id: crypto.randomUUID(), name, age, isActive: true }
// }

// const thor = createHero({ name: 'Thor', age: 1500 })

// thor.powerScale = 'planetary'


// Type Indexing

// type HeroProperties = {
//     isActive: boolean
//     address: {
//         planet: string
//         city: string
//     }
// }

// const addressHero: HeroProperties['address'] = {
//     planet: 'Earth',
//     city: 'Madrid'
// }

// Type from value

// const address = {
//     planet: 'Earth',
//     city: 'Madrid'
// }

// type Address = typeof address

// const addressTwitch: Address = {
//     planet: 'Mars',
//     city: 'Twitch'
// }

// Type from function return

// function createAddress() {
//     return {
//         planet: 'Tierra',
//         city: 'Barcelona'
//     }
// }

// type Address = ReturnType<typeof createAddress>

// Arrays

// const languages: (string | number) [] = []

// languages.push('JavaScript')
// languages.push('JavaScript')
// languages.push('JavaScript')
// languages.push('JavaScript')
// languages.push(2)
// languages.push(true)


// type HeroId = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galatic' | 'universal' | 'multiversal'

// type HeroBasicInfo = {
//     id?:number
//     name: string
//     age: number
// }

// const heroWithBasicInfo: HeroBasicInfo[] = []

/*
    ['X', 'O', 'X'], // <-- string[]
    ['O', 'X', 'O'], // <-- string[]
    ['X', '', 'O']   // <-- string[]
*/

// type CellValue = 'X' | 'O' | ''
// type GameBoard = [
//     [CellValue, CellValue, CellValue],
//     [CellValue, CellValue, CellValue],
//     [CellValue, CellValue, CellValue]
// ]

// const gameBoard: GameBoard = [
//     ['X', 'O', 'X'],
//     ['O', 'X', 'O'],
//     ['X', '', 'O']
// ]

// type RGB = readonly [number, number, number]

// const black: RGB = [0, 0, 0]

// console.log(black);


// Enums

/** En Js no existen los enums por lo tanto podríamos hacer algo así */

/**JS */
// const ERROR_TYPES = {
//     NOT_FOUND: 'notFound',
//     UNAUTHORIZED: 'unauthorized',
//     FORBIDDEN: 'forbidden'
// }

// function viewMessage(typeError) {
//     (typeError === ERROR_TYPES.NOT_FOUND) ?
//         console.log('No se encuentra el recurso')
//         : (typeError === ERROR_TYPES.UNAUTHORIZED) ?
//             console.log('No tienes permiso para acceder')
//             : (console.log('No tines permisos para acceder'))
// }

/**TS */

// const enum ERROR_TYPES {  // no usar const cuando la porcion de codigo se va a usar en otras aplicaciones
//     NOT_FOUND = 'notFound',
//     UNAUTHORIZED = 'unauthorized',
//     FORBIDDEN = 'forbidden'
// }

// function viewMessage(typeError: ERROR_TYPES) {
//     (typeError === ERROR_TYPES.NOT_FOUND) ?
//         console.log('No se encuentra el recurso')
//         : (typeError === ERROR_TYPES.UNAUTHORIZED) ?
//             console.log('No tienes permiso para acceder')
//             : (console.log('No tines permisos para acceder'))
// }


// Aserciones de tipo

const canvas = document.querySelector('canvas')

if (canvas instanceof HTMLCanvasElement) {
    const ctx = canvas.getContext('2d')
}

