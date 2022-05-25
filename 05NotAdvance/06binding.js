const Arpit = {
    name: "Arpit",
    lastName: "Vikhar",
    courseCount: 8,
    getinfo: function () {
        console.log(`
        First name is ${this.name}
        Last name is ${this.lastName}
        No. of courses enrolled in ${this.courseCount}
        `)
    }
}

//Arpit.getinfo();

const Hitesh = {
    name: "Hitesh",
    lastName: "Chaudhary",
    courseCount: 45
}
//this will throw an error as there is no getInfo method defined in the object hitesh
//Hitesh.getinfo();

//we can get the reference of getinfo() for Hitesh by binding and then we can run the method
var hiteshInfo = Arpit.getinfo.bind(Hitesh);
hiteshInfo();


//We can call the getInfo() for Hitesh with the help of call() method
Arpit.getinfo.call(Hitesh);