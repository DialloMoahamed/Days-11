// Reponse numero 1
for (const {name, capital, population, languages} of countries) {
    console.log(name, capital, population, languages);
}


// Reponse numero 2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [nom, skills, scores] = student
console.log(nom, skills, scores.slice(2).toString());