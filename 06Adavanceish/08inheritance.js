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

    login() {
        return 'You are logged in...'
    }

    //Making 
    static restrictAccess() {
        return 'This method can be accessed by this class on'
    }
}
module.exports = User;

//Creating new class by extending the existing class
class subAdmin extends User {
    constructor(name, email) {
        super(name, email);              //This will set the name and email of main class with the 
    }
    getAdminInfo() {
        return 'I am subadmin';
    }
}
const tom = new subAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
//console.log(tom.restrictAccess());      //This will throw an error as we are trying to access the method which is private           
console.log(tom.getInfo());
