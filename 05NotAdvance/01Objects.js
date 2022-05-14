var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
    };
}

//The console log will print the undefined, here we haven't used NEW keyword so it will reffer the 
//existing window context and in the window context there's no firstName and lastName defined.
var Arpit = User("Arpit", 2);
console.log(Arpit);


//this will return the object.
var Arpit = new User("Arpit", 2);
console.log(Arpit);

/** PROTOTYPING : each and every object has the __proto__ i.e. Prototype, with the help of this prototype
 * we can add or override the properties of an object.
 * eg. we'll add the method to the object USER which will return the firstName of a user.
 */

//Injecting new property "getFirstName"
User.prototype.getFirstName = function () {
    console.log(`First Name is ${this.firstName}`)
};

var Arpit = new User("Arpit", 2);
console.log(Arpit);
Arpit.getCourseCount();
Arpit.getFirstName();

var Mark = new User("Mark", 2);
console.log(Mark);
Mark.getCourseCount();
Mark.getFirstName();


/**********************************************************************/

/*Every OBJECT has some set of properties, there may be a case where we could access 
the wrong property so it's a good practice to check the property before accessing them */

var markviks = new User("MarkViks", 5);
//Checking the user has a property "firstName" else it will return undefined.
if (markviks.hasOwnProperty("firstName")) {
    markviks.getFirstName();
}
//Checking the user has a property "firstName" else it will return undefined.
if (markviks.hasOwnProperty("getCourseCount")) {
    markviks.getCourseCount();
}