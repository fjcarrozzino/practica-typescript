import { Products } from "./05-destructuracion"
import { taxCalculation } from "./05-destructuracion"
import { tax } from "./05-destructuracion"


const shoppingCart: Products[] = [
    {
        description: 'Nokia',
        price: 150.0
    },
    {
        description: 'iPad Pro',
        price: 250.0
    }
]

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax
})


console.log('Total', total)
console.log('Tax', totalTax)

console.log(shoppingCart)
