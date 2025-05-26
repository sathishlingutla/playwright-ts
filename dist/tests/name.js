"use strict";
console.log("Hello typescript");
// Example user object
const user = {
    firstname: "tom",
    age: 20
};
// Function to check the length of the user's firstname
function getInfoTest(user) {
    if (user.firstname.length > 10) {
        console.log("pass");
    }
    else {
        console.log("fail");
    }
}
// Call the function with the user object
getInfoTest(user);
// Print the user's firstname
console.log(user.firstname);
