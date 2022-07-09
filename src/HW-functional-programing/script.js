export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this
function getMyTaxes(salary){
    const myTaxes = salary * this.tax;
    return myTaxes;
}

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this
export function getMiddleTaxes(){
    const middleTaxes = this.tax * this.middleSalary;
    return middleTaxes;
}

// 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
function getTotalTaxes(){
    const totalTaxes = getMiddleTaxes.call(this) * this.vacancies;
    return totalTaxes;
}

// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
function getMySalary(){
    const timer = setInterval(function(){
        const salary = Math.floor(Math.random() * (2001 - 1500) + 1500);
        const taxes = Number((this.tax * salary).toFixed(2));
        const profit = Number((salary - taxes).toFixed(2));
        const result = {salary: salary, taxes: taxes, profit: profit};
        console.log(result)
    }.bind(this), 10000);
    return timer;
}