

interface Character {
    name: string;
    hp: number;
    spells: string[];
    hometown?: string;
}

const harryPotter: Character = {
    name: 'Harry Potter',
    hp: 50,
    spells: ['crucio', 'wingardium leviosa', 'accio', 'expelliarmus', 'avadakadabra'],
    hometown: 'holis'
}

console.log(harryPotter)
