// let name = "홍길동";
// let score = 90;

// let student = {
//     name : name,
//     score : score
// };

// let student = {
//     name,
//     score
// };

let student = {
    name : "홍길동",
    score : 90
};

// let name = student.name;
// let score = student.score;
let {name, score} = student;

console.log(name + ", " + score);

// -------------------------------------

let student1 = {...student};
let student2 = student;
console.log("student == student1 ? " + (student == student1));
console.log("student == student2 ? " + (student == student2));

let student3 = {...student, address : "주소"};
console.log("student.address = " + student.address);
console.log("student3.address = " + student3.address);

let student4 = {...student, address : "주소", name : "김연아"};
console.log("student3.name = " + student3.name);
console.log("student4.name = " + student4.name);
// -------------------------------------

let array = [1, 2, 3, 4, 5];

// let a = array[0];
// let b = array[1];

let [a, b, ...rest] = array;

console.log(a + b);
console.log(rest);

// -------------------------------------

let arr1 = [1, 2];
let arr2 = [3, 4];
// let arr3 = arr1.concat(arr2);
let arr3 = [...arr1, ...arr2];

console.log(arr3);

let arr4 = [...arr3];
console.log("arr3 == arr4 ? " + (arr3 == arr4));

let arr5 = arr3;
console.log("arr3 == arr5 ? " + (arr3 == arr5));

let arr6 = [...arr3, 5];
console.log(arr6);