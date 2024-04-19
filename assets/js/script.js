const char = createMage('Leonardo');
const monster = createLittleMonster();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);