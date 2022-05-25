const user = {
    name: "Arpit",
    courseCount: 5,
    role: "adming"
}

console.log(user.courseCount);

//Destructuring the user object to an another variable
const { name, courseCount, role } = user;
console.log(courseCount);

//While destructuring, make sure to provide the correct naming convention
const { fname, MycourseCount, mrole } = user;
//This won't print the value as the name of the properties doesn't match
console.log(MycourseCount);