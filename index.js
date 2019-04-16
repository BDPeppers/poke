
// Professor Maddie instead of Professor oak

// //Starter Pokemon - each has a predetermined path
// Charmander - Curve
// Squirtle - Bonus
// Bulbasaur - Appeal

// Choosing Charmander/Curve
// Battle One Opponent = Algorithms - Blastoise
// Battle Two Opponent = PLC - Suicune
// Battle Three Opponent = Software Engineering - Kyogre
// Battle Four Opponent = Computer Science - Dark Charizard

// Choosing Squirtle/Bonus
// Battle One Opponent = Algorithms - Venusar
// Battle Two Opponent = PLC - Raikou
// Battle Three Opponent = Software Engineering - Zapdos
// Battle Four Opponent = Computer Science - Dark Blastoise

// Choosing Bulbasaur/Appeal
// Battle One Opponent = Algorithms - Charizard
// Battle Two Opponent = PLC - Entei
// Battle Three Opponent = Software Engineering - Groudon
// Battle Four Opponent = Computer Science - Dark Venusar

// Pokemon Objects///////////////////////////////////////////
//Charmander object
var Curve = {
    attack: ['letter grade', 'pass'],
    evolution: 1,
    health: 100,
    sprite: '',
    path: 'curve' //Blastoise, Suicune, Kygore, Dark Charizard
}
// Squirtle object
var Bonus = {
    attack: ['attendance', 'completion grade', 'optional', 'points'],
    evolution: 1,
    health: 100,
    sprite: '',
    path: 'bonus'//Venusar, Raikou, Zapdos, Dark Blastoise
}
// Bulbasaur
var Appeal = {
    attack: ['crying', 'office hours', 'emails', 'begging'],
    evolution: 1,
    health: 100,
    sprite: '',
    path: 'appeal'//Charizard, Entei, Groudon, Dark Venusar
}


// Opponent Objects//////
// Design and Analysis: Algorithms
var Algorithms = {
    attack: ['Big O', 'Trees', 'NP', 'Dijkstra'],
    sprite: '',
    health: 100
}
// Programming Language Concepts
var PLC = {
    attack: ['Scala', 'Lambda', 'Goto Table', 'Baby Curve'],
    sprite: '',
    health: 100
}
// Software Engineering
var SE = {
    attack: ['Group Members', 'Deadlines', 'Diagrams', 'Group Video'],
    sprite: '', 
    health: 100 
}
// Computer Science
var CS = {
    attack: ['C-', 'Extra Semester', 'Math', 'Physics'],
    sprite: '',
    health: 100
}


// Battle Setup Functions////////////////////////////////////////////////
function path(Pokemon){
    //selected pokemon determines the battle sprite of Opponent
    if(Pokemon.path == 'appeal'){//Bulbasaur
        //set battle sprite for opponent objects againist bulbasar
        PLC.sprite = 'Entei';
        Algorithms.sprite = 'Charizard';
        SE.sprite = 'Groudon';
        CS.sprite = 'Dark Charizard'

    }
    if(Pokemon.path == 'bonus'){//Squirtle
        PLC.sprite = 'Venusar';
        Algorithms.sprite = 'Raikou';
        SE.sprite = 'Zapdos';
        CS.sprite = 'Dark Blastoise';

    }
    if(Pokemon.path == 'curve'){//Charizard
        PLC.sprite = 'Blastoise';
        Algorithms.sprite = 'Suicune';
        SE.sprite = 'Kyogre';
        CS.sprite = 'Dark Charizard';
    }
}
function win(Pokemon){
    Pokemon.evolution++;
}
function lose(){
    //retry 
}

function battle(Pokemon, Opponent){
    while(Pokemon.health > 0 || Opponent.health > 0){

    }
    if(Opponent.health <= 0 ){
        win(Pokemon);
    }
    if(Pokemon.health <= 0){
        lose();
    }
}

