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

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));

        this.update()
    },
    update() {
        //Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife * 100);
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`; 

        //Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife * 100);
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`; 
    },

    doAttack(attacking, attaked) {
        if(attacking.life <= 0 || attaked.life <= 0) {
            console.log("Alguém tá morto, não pode atacar");
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attacking.attack * attackFactor;
        const actualDefense = attaked.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            attaked.life -= actualAttack;
            attaked.life = attaked.life < 0 ? 0 : attaked.life;
            log.addMessage(`${attacking.name} causou ${actualAttack} de dano em ${attaked.name}`);
        } else {
            log.addMessage(`${attaked.name} conseguiu defender...`);
        }

        this.update();
    }
}

const log = {
    list: [],
    addMessage(msg) {
        this.list.push(msg);
        this.render();
    },
    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';

        for(let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}