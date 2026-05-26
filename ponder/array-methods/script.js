// 1. JS Arrays

const listedArray = ["variable1", "variable2", "variable3", "variable4"];
console.log(listedArray);

console.log(listedArray[2]);

const listedNums = [1, 2, 7, 8];
console.log(listedNums);

// 2. JS Objects
// own custom datatype

const studentName = "Steven";
const studentClasses = ["WDD131", "CSE110"];
const studentGrades = [67, 88];
// we can do better
const student = {
    // key/value pairs
    name:"Steven",
    classes:["WDD131", "CSE110"],
    grades:[61, 88]
};
console.log(student.grades[0]);

// 3. Array Methods

listedArray.forEach((element) => {
    // runs this function once per every element in the array one at a time
    console.log(element)
});

const newArray = listedArray.map((element) => {
    return element + " modifier"
});
console.log(newArray);

// returns new array filtered by boolean
const new2Array = listedArray.filter((element) => {
    return element[8] === "1";
})
console.log(new2Array)

// use .reduce and .thelastone