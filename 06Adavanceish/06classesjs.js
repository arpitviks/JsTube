class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    #courseList = [];           //To declare a private variable, # is used

    getInfo() {
        return { name: this.name, email: this.email }
    }

    enrollCourse(name) {                //This is nothing but a setter
        this.#courseList.push(name);
    }
    getCourseList() {                   //This is nothing but a getter
        return this.#courseList
    }
}
module.exports = User;

const Arpit = new User("Arpit", "Arpit@Lco");
Arpit.enrollCourse("React");
console.log(Arpit.getInfo());
console.log(this.courseList);           //This will return undefined as courseList is a private variable
console.log(Arpit.getCourseList());                    