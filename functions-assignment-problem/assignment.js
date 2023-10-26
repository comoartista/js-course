const sayHello = name =>  console.log('Hi ' + name);
sayHello('Oksana');

const sayHello2 = (name, sentence) => {
  console.log(sentence + name);
}
sayHello2('Oksana', 'Hi ');

const sayHello3 = () => {
  console.log('Hi ' + 'Oksana');
}
sayHello3();

const sayHello4 = () => {
  console.log('Hi ' + 'Oksana');
}
sayHello4();

const sayHello5 = (name, sentence='Hii ') => {
  console.log(sentence + name);
}
sayHello5('Oksana');


const checkInput = (cb, ...strings) => { 
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (hasEmptyText) {
    cb();
  }
}

checkInput(() => {
  console.log('All not empthy');
}, 
'Hello',
'12',
' '
);