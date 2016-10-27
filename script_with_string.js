var people = [1, 3, 7, 10, 11, 31, 100, 981, 1000, 1370, 1668, 1917, 1924, 4074];

var isMan = obj => obj.toString(2).slice(-1) == '1';
var isMarried = obj => obj.toString(2).slice(-2, -1) == '1';
var hasHigherEducation = obj => obj.toString(2).slice(-3, -2) == '1';
var hasNumberOfChildren = (obj, oper, numOfChildren) => eval(parseInt(obj.toString(2).slice(-6, -3), 2) + oper + numOfChildren);
var hasAge = (obj, oper, age) => eval(parseInt(obj.toString(2).slice(-12, -6), 2) + oper + age);

//man, unmarried, has higher education, under 30 years
let somePerson1 = people.filter(item => isMan(item))
                        .filter(item => !isMarried(item))
                        .filter(item => hasHigherEducation(item))
                        .filter(item => hasAge(item, '<', 30));

// women, married, 3 or more child
let somePerson2 = people.filter(item => !isMan(item))
                        .filter(item => isMarried(item))
                        .filter(item => hasNumberOfChildren(item, '>', 2));

// woman, unmarried, 25<=age<=30, has higher education, whithout child
let somePerson3 = people.filter(item => !isMan(item))
                        .filter(item => hasAge(item, '>', 24))
                        .filter(item => hasAge(item, '<', 31))
                        .filter(item => hasHigherEducation(item))
                        .filter(item => hasNumberOfChildren(item, '<', 1));

console.log(people);
console.log(somePerson1);
console.log(somePerson2);
console.log(somePerson3);