

/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}

console.log(results);

// Using map()
let nums1 = [1, 2, 3, 4, 5]
//callback method generally not created outside the map like this
const multByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults)

// Simplified w/ map()
const simplfied = nums.map(function (num) {return num * 2});
console.log(simplfied)

// Simplfied w/ map() + arrow function
const arrowFunction = nums1.map(num => num * 2)
console.log(arrowFunction)

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

//returns each name and id as an object
const destructuredStudentsWithIds = students.map(({ name, id }) => ({ name, id }));
console.log(destructuredStudentsWithIds)

//this creates an array of arrays for each student
const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds)

//add age property
const updatedStudents = students.map(student => ({
  ...student,
  age: Math.floor(Math.random() * 11) + 20  // Random age between 20 and 30
}));
console.log(updatedStudents)


const id = students.map(students => students.id);
const names = students.map(students => students.name);
const profession = students.map(students => students.profession);
const skill = students.map(students => students.skill);
console.log(id)
console.log(names)
console.log(profession)
console.log(skill)