async function getPlanets(page = 1) {
    const planetsNames = [];
    const planets = fetch(`https://swapi.dev/api/planets/?page=${page}`);
    planets
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            res.results.forEach(item => {
                planetsNames.push(item.name);
            })
            console.log(planetsNames.join(", "))
        });
    return planetsNames;
}
export default getPlanets