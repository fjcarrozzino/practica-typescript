
// Destructuracion de objetos

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    details: Details
}

interface Details {
    author: string;
    songName: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 60,
    songDuration: 60,
    details: {
        author: 'Ed Sheeran',
        songName: 'Perfect',
        year: 2018
    }
}

const { songDuration: duration, details } = audioPlayer
const { author } = details

// console.log('Author name is: ' + author)
// console.log('Name of the song is: ' + audioPlayer.details.songName)
// console.log('The song duration is: ' + duration + ' seconds')

//Destructuracion de arreglos

const [ , , trunks]: string[] = ['goku', 'vegeta', 'Trunks']

// console.log('Personaje 3:', trunks)

//Destructuracion de argumentos

interface Products {
    description: string;
    price: number;
}

const phone: Products = {
    description: 'Nokia 1100',
    price: 150.0
}

const tablet: Products = {
    description: 'iPad Pro',
    price: 250.0
}

const shoppingCart = [phone, tablet]
const tax = 0.15


console.log(shoppingCart)

interface TaxCalculationsOptions {
    tax: number;
    products: Products[];
}

const taxCalculation = ( options: TaxCalculationsOptions): [number, number] => {

    const { tax, products } = options
    let total = 0
    products.forEach(({ price }) => 
        total += price
        )

        return [total, total * tax]
}

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax
})

console.log('Total', total)
console.log('Tax', totalTax)