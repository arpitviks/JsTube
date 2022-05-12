var user = {
    firstName: "Arpit",
    lastName: "Vikhar",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (coursename) {
        this.courseList.push(coursename);
    },
    courseCount: function () {
        return `${this.firstName} has bought ${this.courseList.length} courses`;
    }

}
/* console.log(user.firstName);
console.log(user["lastName"]); 

user.loginCount = 44;
console.log(user.loginCount);
console.table(user);
 */
user.buyCourse("MERN");
user.buyCourse("PYTHON");
console.log(user.courseCount());
