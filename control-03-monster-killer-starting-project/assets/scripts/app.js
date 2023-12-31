const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 14;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEA';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let battleLog = [];
let lastLoggedEntry;

function getMaxLifeValues() {
    const enteredValue = prompt('Maximum life for you and the moster', '100');

    const parsedValue = parseInt(enteredValue);
    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw {message: 'Invalid user input, not a number!'}
    }
    return parsedValue;
}

let chosenMaxLife;
try {
    chosenMaxLife = getMaxLifeValues();
} catch (error) {
    console.log(error);
    chosenMaxLife = 100;
    alert('You entered smt wrong, default value of 100 was used.')
    // throw error;
} finally {

}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
    let logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
    switch (event) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry = {
                event: event,
                value: value,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry = {
                event: event,
                value: value,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry = {
                event: event,
                value: value,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: event,
                value: value,
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        default: 
            logEntry = {};

    }

    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage, 
        currentMonsterHealth,
        currentPlayerHealth 
    );
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('Bonus life safed you');
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'PLAYER WON', 
            currentMonsterHealth,
            currentPlayerHealth 
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'MONSTER WON', 
            currentMonsterHealth,
            currentPlayerHealth 
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw');
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'A DRAW', 
            currentMonsterHealth,
            currentPlayerHealth 
        );
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage;
    let logEvent;
    if (mode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK){
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
 
    endRound();
}

function attackHandler() {
   attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;

    if (currentMonsterHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue , 
        currentMonsterHealth,
        currentPlayerHealth 
    );
    endRound();
}

function printLogHandler () {
    for (let i = 0; i < 3; i++) {
 
    }
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);