// function fullname(bangvalue: {firstName: String, lastName: String}) {
// console.log('${bangvalue.firstName} ${bangvalue.lastName}');
// }
// let p = {
//     firstName : "ling",
//     lastName : "sathis"
// };

// fullname(p);

function fullname(bangvalue: { firstName: string; lastName: string }) {
    console.log(`${bangvalue.firstName} ${bangvalue.lastName}`); // Use backticks for template literals
}

let p = {
    firstName: "ling",
    lastName: "sathis"
};

fullname(p);
