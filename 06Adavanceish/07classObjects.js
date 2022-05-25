
const User = require("./06classesjs.js");

const Arpit = new User("Arpit", "Arpit@lco.dev");

console.log(Arpit.getInfo());

Arpit.enrollCourse("React");
Arpit.enrollCourse("Angular");


console.log(Arpit.getCourseList());


//looping the values from the objects
const courses = Arpit.getCourseList();
courses.forEach(c => { console.log(c); });