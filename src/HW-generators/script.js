function * createIdGenerator(){
    let id = 1;
    while(true){
        yield id++
    }
}
const idGenerator = createIdGenerator();
export default idGenerator;
