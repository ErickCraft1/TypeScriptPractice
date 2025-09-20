type Product = {
    id: `${string}-${string}-${string}-${string}`
    name: string
    price: number
    quantity: number
}
interface User {
    id: `${string}-${string}-${string}-${string}`
    username: string
}

export interface ICarr {
    user?: User,
    products: Product[],
    zapatillas?: Zapatilla[],
    total: number
}

type Zapatilla = Product & {
    size: number | string
}