let userName = prompt("Введите своё имя:");

// Вызываем функцию:
getAndPrintName(userName);

// Описываем функцию:
function getAndPrintName(inputName) {
    alert(`Приятно познакомится, ${inputName}!`);
}
