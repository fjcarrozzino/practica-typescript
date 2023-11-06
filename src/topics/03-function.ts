

// const addNumbers = ( a: number, b: number ):number => {
//     return a + b
// }

// console.log(addNumbers(5, 5))

// const multiplyNumbers = ( firstNumber: number, secondNumber?: number, base: number = 2): number => {
//     return firstNumber * base
// }

// const multiply = multiplyNumbers(10)

// console.log({ multiply })

interface Character2 {
    name: string;
    hp: number;
    showHp: () => void
}

const healCharacter = (character: Character2, amountHeal: number): number => {

    return character.hp + amountHeal
}

const hermione: Character2 = {
    name: 'Hermione',
    hp: 50,
    showHp() {
        console.log(`My hp is ${this.hp}`)
    }
}

healCharacter(hermione, 10)

hermione.showHp()