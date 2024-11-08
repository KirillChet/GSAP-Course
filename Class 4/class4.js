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

// Рассчитываем общую стоимость проекта
let screenPrice = 10000; // стоимость экранов для примера
let fullPrice = screenPrice + servicePrice + servicePriceSecond;
console.log("Общая стоимость проекта:", fullPrice);

// Вычисляем процент подрядчику
let percentage = 10; // процент для подрядчика
let percentageResult = +(fullPrice * (percentage / 100));
console.log("Процент подрядчику:", percentageResult);

// Вычисляем итоговую сумму за вычетом процента подрядчику
let servicePercentPrice = fullPrice - percentageResult;
console.log("Итоговая сумма за вычетом процента подрядчику:", Math.ceil(servicePercentPrice));

// Предоставление скидки
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
