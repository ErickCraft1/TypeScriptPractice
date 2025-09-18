type Operation = 'add' | 'multiply' | 'divide'
type Result = number

const calculator = (a: number, b: number, op: Operation): Result => {
    if (op === 'add') return a + b
    if (op === 'multiply') return a * b
    if (op === 'divide') {
        if (b === 0) throw new Error('can\t divide by 0! sorry!')
        return a / b
    }
    throw new Error('Operation is not valid')
}

console.log(calculator(1, 3, 'add'));
