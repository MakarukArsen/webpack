const getAverage = (...numbers) => {
    let numbersArr = numbers.slice().filter((item) => Number.isInteger(item));
    let result = numbersArr.reduce((previousValue, currentValue) => {
        let result = (previousValue + currentValue);
        return result;
    })
    result /= numbersArr.length;
    return result;
}
export default getAverage