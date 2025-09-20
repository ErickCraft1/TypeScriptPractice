
interface Hero {
    id: string,
    name: string,
    age: number
}

const hero: Hero = {
    id: '1',
    name: 'Thor',
    age: 1500
}

interface Producto {
    id: number
    name: string
    price: number
    quantity: number
}

interface Zapatillas extends Producto {
    talla: number
}

interface CarritoDeCompras {
    totalPrice: number
    productos: (Producto | Zapatillas)[]
}

interface CarritoOps {
    add: (product: Producto) => void
    remove: (id: number) => void
}

const carrito1: CarritoDeCompras = {
    totalPrice: 100,
    productos: [

    ]
}