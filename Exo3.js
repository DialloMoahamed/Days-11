// Reponse numero 1
for (const {name, capital, population, languages} of countries) {
    console.log(name, capital, population, languages);
}


// Reponse numero 2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [nom, skills, scores] = student
console.log(nom, skills, scores.slice(2).toString());


// Reponse numero 3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
function convertArrayToObject(params) {
    for (const [name, skills, scores] of params) {
       console.log([{name, skills, scores}])
    }
}
convertArrayToObject(students);


// Reponse numero 4
const étudiant = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
let newEtudiant = {...étudiant}
newEtudiant.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
newEtudiant.skills.backEnd.push({skill: 'Express', level: 9})
newEtudiant.skills.dataBase.push({skill: 'SQL', level: 8})
newEtudiant.skills.dataScience.push({skill: 'SQL'})
console.log(newEtudiant);
