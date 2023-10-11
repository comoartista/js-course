const task3Element = document.getElementById('task-3');
function displayGreeting() {
    alert("Hi, there!");
}

function displayName(name) {
    alert(name);
}

displayGreeting();
displayName("Oksana");

task3Element.addEventListener(("click"), displayGreeting);

function displayGreeting2(name1, name2, name3) {
    return `${name1}, ${name2}, ${name3} happy to see you`
}

alert(displayGreeting2("Max", "Jenni", "Troy"))