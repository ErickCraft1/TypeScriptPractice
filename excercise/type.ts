import { log } from 'node:console'
import { type ICarr } from './declarations'
import { createInterface } from 'node:readline/promises'
import { number } from 'zod'

async function main() {

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    })

    //User
    const userName = await rl.question('What is your user name?\n')
    const userId = crypto.randomUUID()

    // Firts product
    const name = await rl.question('\nWhat is the product name?\n')
    const price = Number(await rl.question('What is the price?\n$'))
    const quantity = Number(await rl.question('What is the quantity?\n'))

    // Zapatillas
    const name2 = await rl.question('\nWhat is the product chosse name?\n')
    const price2 = Number(await rl.question('What is the price?\n$'))
    const quantity2 = Number(await rl.question('What is the quantity?\n'))
    const size = Number(await rl.question('What is the size?\n'))


    const carrito: ICarr = {
        user: {
            id: userId,
            username: (userName === "" ? "Unknow" : userName)
        },
        products: [
            {
                id: crypto.randomUUID(),
                name: (name === "" ? "Unknow" : name),
                price,
                quantity
            }
        ],
        zapatillas: [
            {
                id: crypto.randomUUID(),
                name: (name2 === "" ? "Unknow" : name2),
                price: price2,
                quantity: quantity2,
                size: (size === 0 ? "" : size)
            }
        ],
        total: (price * quantity) + (price2 * quantity2)
    }
    log(`\n\t\tBoleta electronica
Usuario: ${carrito.user?.username}
-----------------------------------------------
                    PRODUCTOS
-----------------------------------------------
Nombre\t\t\t Cantidad\t Precio\n
${carrito.products[0].name}\t\t\t     ${carrito.products[0].quantity}\t\t  ${carrito.products[0].price}
${carrito.zapatillas[0].name}(talla:${carrito.zapatillas[0].size})\t\t     ${carrito.zapatillas[0].quantity}\t\t  ${carrito.zapatillas[0].price}
-----------------------------------------------
Total:\t\t\t\t\t  ${carrito.total}`)
    rl.close();
}
// main()

// const calculateTotal = (products:ICarr[]): number => {
// // return products.reduce((acc, p) => acc + (p.products.map().price * p.quantity), 0)
// }

const addProduct = (carts: ICarr[]): number => {
    return carts.reduce((acc, cart) => {
        const totalCart = cart.products.reduce((sum, pr) => sum + pr.price * pr.quantity, 0)
        return acc + totalCart
    }, 0)
}

log(addProduct([{
    products: [
        {
            id: crypto.randomUUID(),
            name: "Zapatos",
            price: 50,
            quantity: 2
        },
        {
            id: crypto.randomUUID(),
            name: "Zapatillas",
            price: 80,
            quantity: 1,

        }
    ],
    total: 0
}]))
