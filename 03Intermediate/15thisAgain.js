console.log(this);
//for all regular function calls this points to window object

var user = {
    firstname: "Arpit",
    courseCount: 4,
    getCourseCount: function () {
        console.log("LINE No 8", this);
        function sayHello() {
            console.log("Hello");
            console.log("Line 30", this);
        }
        sayHello();
    }
}

user.getCourseCount();