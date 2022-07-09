function getNumberToPow(value, powValue){
    let result = value;
    if (!powValue){
        return 1;
    }
    for (let i = 1; i < Math.abs(powValue); i++){
        result *= value;
    }
    if (powValue < 0){
        result = 1 / result;
    }
    return result;
}
export default getNumberToPow;