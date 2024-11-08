let titleProject = prompt("Название проекта?");
let screensValue = prompt("Какие типы экранов? (шаблонные, с уникальным дизайном, с анимациями)");
let responsive = confirm("Нужен ли респонсивный сайт?");
let service1 = prompt("Какой сервис нужен?");
let servicePrice1 = parseFloat(prompt("Сколько это будет стоить?"));
let service2 = prompt("Какой еще сервис тебе нужен?");
let servicePrice2 = parseFloat(prompt("Сколько будет стоить этот второй сервис?"));
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log("Общая стоимость проекта:", fullPrice);

let percentage = 0.1;
let servicePercentPrice = Math.round(fullPrice * (1 - percentage));
console.log("Итоговая сумма за вычетом процента партнеру:", servicePercentPrice);

if (fullPrice > 50000) {
    console.log("Сделаем скидку 10%");
} else if (fullPrice > 20000 && fullPrice <= 50000) {
    console.log("Сделаем скидку 5%");
} else if (fullPrice > 0 && fullPrice <= 20000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice <= 0) {
    console.log("Что-то пошло не так");
} else if (fullPrice === 0 || fullPrice === 20000 || fullPrice === 50000) {
    console.log("Особая цена без скидки");
}

switch ;











// 7. Условия на скидку
