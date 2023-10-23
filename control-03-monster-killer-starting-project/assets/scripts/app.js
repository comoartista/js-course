const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 14;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);


function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('Bonus life safed you');
    }
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won')
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost')
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw')
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;

    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won')
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost')
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw')
    }
    endRound();
}
function attackHandler() {
   attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
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
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler);