// ЗАДАЧІ З ОБЄКТАМИ
// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(plan) {
        // const {languages} = plan.skills;
        // const str = `Мне ${plan.age} и я владею языками: ${languages.join(' ').toString().toUpperCase()}`;
        let str = `Мне ${plan.age} и я владею языками: `;
        const {languages} = plan.skills;
        languages.forEach(elem => {
            str += ` ${elem.toUpperCase()}`;
        });
        console.log(str);
    }
};

function showExperience(plan) {
    const { exp } = plan.skills
    return exp; 
}

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (key in programmingLangs) {
        str +=  `Язык  ${key} изучен на ${programmingLangs[key]}\n`
    }
    console.log(str);
    return str;
}

// showExperience(personalPlanPeter)
// showProgrammingLangs(personalPlanPeter)
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)

// ЗАДАЧІ З МАСИВАМИ
// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    // if (arr.length < 1) {
    //     return `Семья пуста`;
    // }

    // let str = `Семья состоит из:`
    // for (let i = 0; i < arr.length; i++) {
    //     str += `${arr[i]} `;        
    // }

    let str = '';

    arr.length === 0 ?  str = `Семья пуста` : str = `Семья состоит из:`;
    arr.forEach(member => {
        str += `${member} `
    })
    console.log(str);
    // return str;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) !== 'string' ) {
        console.log('Ошибка!');
    }
    const arr = str.split('').reverse().join('');
    console.log(arr);

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}


const classP = [2,3]
const classY = 5

function betterThanAverage(classPoints, yourPoints) {
    const classPointsArr = [...classPoints, yourPoints];
    console.log(classPointsArr);
    
    const classPointsSum = classPointsArr.reduce((a,b) => {
    return a + b
  },0) 

    const average = classPointsSum / classPointsArr.length

    return yourPoints >= average ? true : false
}



const str = 'one.two.three'
var replaceDots = function(str) {
    let arr2 = [...str]
    const arr1 = []
    
    arr2.forEach(elem => {
        arr2 = [elem.replace('.', '-')]
        arr1 = [...arr2]
        return arr1


    })
    console.log(arr1);

  }

  console.log(replaceDots(str));