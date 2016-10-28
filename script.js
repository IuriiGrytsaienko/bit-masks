var people = [1, 3, 7, 10, 11, 31, 100, 981, 1000, 1370, 1668, 1917, 1924, 4074];

const MAN = 1;
const WEDDING = 2;
const HIGHER_EDUCATION = 4;
const QUANTITY_OF_CHILDRENS = 56;
const YEARS = 4032;

const bIsMan = obj => obj & MAN;
const bIsMarried = obj => obj & WEDDING;
const bHasHigherEducation = obj => obj & HIGHER_EDUCATION;
const bHasNumberOfChildren = (obj, oper, numOfChildren) => eval(((obj & QUANTITY_OF_CHILDRENS) >> 3) +  oper + numOfChildren)
const bHasAge = (obj, oper, age) => eval( ((obj & YEARS) >> 6)+  oper + age);

//man, unmarried, has higher education, under 30 years
let somePerson4 = people.filter( item => bIsMan(item))
                          .filter(item => !bIsMarried(item))
                          .filter(item => bHasHigherEducation(item))
                          .filter(item => bHasAge(item, '<', 30));

// women, married, 3 or more child
let somePerson5 = people.filter( item => !bIsMan(item))
                        .filter(item => bIsMarried(item))
                        .filter( item => bHasNumberOfChildren(item, '>', 2));

// woman, unmarried, 25<=age<=30, has higher education, whithout child
let somePerson6 = people.filter(item => !bIsMan(item))
                        .filter(item => bHasAge(item, '>', 24))
                        .filter(item => bHasAge(item, '<', 31))
                        .filter(item => bHasHigherEducation(item))
                        .filter( item => bHasNumberOfChildren(item, '<', 1));

console.log(people);
console.log(somePerson4);
console.log(somePerson5);
console.log(somePerson6);