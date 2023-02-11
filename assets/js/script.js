let stu1 = {
    name: "Rasul",
    surname: "Hasanov",
    age: 19,
}
let stu2 = {
    name: "Ulker",
    surname: "Hasanov",
    age: 29,
}
let stu3 = {
    name: "Nihad",
    surname: "Hasanov",
    age: 21,
}
let stu4 = {
    name: "Hesen",
    surname: "Hasanov",
    age: 22,
}
let stu5 = {
    name: "Evez",
    surname: "Hasanov",
    age: 25,
}
let students = [stu1, stu2, stu3, stu4, stu5];


let results = students.filter(a => a.age > 20)



function findBirthDate (results){
    let today = new Date();

    for (const item of results) {
       console.log(today.getFullYear() - item.age);
        
    }
   
}
findBirthDate(results)


// // function findAge(arr) {
// //     let sum = 0;
// //     let count = 0;

// //     for (const item of arr) {
// //         sum += item.age;
// //         count++;

// //     }
// //     return sum / count;


// // }
// // console.log(findAge(students));