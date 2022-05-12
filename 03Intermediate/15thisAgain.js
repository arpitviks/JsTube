console.log(this);
//for all regular function calls this points to window object

var user = {
    firstname: "Arpit",
    courseCount: 4,
    getCourseCount: function () {
        console.log("LINE No 8", this);         //It will return the context as a user object as getCourseCount() is getting called from the "user" object
        function sayHello() {
            console.log("Hello");
            console.log("Line 30", this);       //It will return the context as a "Windows" because it is gettng called independently not with the help of any object.
        }
        sayHello();
    }
}

user.getCourseCount();

//Execute this code in chrome console

