const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 10
    }
}

const createMage = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 60,
        maxLife: 60,
        attack: 14,
        defense: 4
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 5
    }
}

const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }
}