// Запрашиваем данные у пользователя
let titleProject = prompt("Название проекта?");
console.log("Название проекта:", titleProject);

let screensValue = prompt("Какие типы экранов? (шаблонные, с уникальным дизайном, с анимациями)");
console.log("Типы экранов:", screensValue);

let responsive = prompt("Нужен ли респонсив на сайте?");
console.log("Респонсив:", responsive);

let service = prompt("Какой дополнительный тип услуги нужен?");
console.log("Дополнительный тип услуги:", service);

let servicePrice = +prompt("Сколько это будет стоить?");
console.log("Цена услуги:", servicePrice);

let serviceSecond = prompt("Какой дополнительный тип услуги нужен?");
console.log("Второй тип услуги:", serviceSecond);

let servicePriceSecond = +prompt("Сколько это будет стоить?");
console.log("Цена второй услуги:", servicePriceSecond);

let screenPrice = 10000; // стоимость экранов для примера
let percentage = 10; // процент для подрядчика

// 1. Функция getAllServicePrices с помощью "function expression"
// Возвращает сумму стоимости всех дополнительных услуг
const getAllServicePrices = function() {
    return servicePrice + servicePriceSecond;
};

let allServicePrices = getAllServicePrices();
console.log("Общая стоимость дополнительных услуг:", allServicePrices);

// 2. Функция getFullPrice с помощью "function declaration"
// Возвращает сумму стоимости вёрстки и всех дополнительных услуг
function getFullPrice() {
    return screenPrice + allServicePrices;
}

let fullPrice = getFullPrice();
console.log("Общая стоимость проекта:", fullPrice);

// 3. Функция getTitle
// Изменяет название проекта: первый символ - заглавный, остальные - строчные
function getTitle() {
    if (titleProject) {
        return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
    }
    return titleProject;
}

titleProject = getTitle();
console.log("Отредактированное название проекта:", titleProject);

// 4. Функция getServicePercentPrices
// Возвращает итоговую стоимость проекта за вычетом процента подрядчику
function getServicePercentPrices() {
    let percentageResult = fullPrice * (percentage / 100);
    return Math.ceil(fullPrice - percentageResult);
}

let servicePercentPrice = getServicePercentPrices();
console.log("Итоговая сумма за вычетом процента подрядчику:", servicePercentPrice);

// 5. Функция getRollbackMessage
// Определяет и выводит сообщение о скидке для клиента в зависимости от стоимости проекта
function getRollbackMessage() {
    if (fullPrice > 50000) {
        console.log("Делаем скидку 10%");
    } else if (fullPrice > 20000 && fullPrice <= 50000) {
        console.log("Делаем скидку 5%");
    } else if (fullPrice > 0 && fullPrice <= 20000) {
        console.log("Скидка не предусмотрена");
    } else if (fullPrice <= 0) {
        console.log("Что-то пошло не так");
    } else if (fullPrice === 20000 || fullPrice === 50000) {
        console.log("Особая цена без скидки");
    }
}

getRollbackMessage();
