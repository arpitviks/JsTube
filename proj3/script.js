const courses = [
    {
        name: "Complete ReactJs course",
        price: "2.3"
    },
    {
        name: "Complete Angular course",
        price: "2.1"
    },
    {
        name: "Complete MERN course",
        price: "2.7"
    },
    {
        name: "Complete C++ course",
        price: "2.8"
    }
]
function generateList() {
    var ul = document.querySelector(".list-group");
    //Clearing the innerHTML of <ul></ul> whenever method is called
    ul.innerHTML = "";
    courses.forEach((courses) => {
        //Create a list elemet <li></li> with a class "list-group-item"
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        //apending coursename inside the <li></li>
        const coursename = document.createTextNode(courses.name);
        li.appendChild(coursename);

        //Creating span 
        const span = document.createElement("span");
        span.classList.add("float-right");

        //Adding text node to the span
        const courseFee = document.createTextNode("$ " + courses.price);
        span.appendChild(courseFee);

        //Appending span to <li></li>
        li.appendChild(span);
        //Appending list to the <ul></ul>
        ul.appendChild(li);
    })


}
generateList();
//Sorting the course list ASC 
const button1 = document.querySelector(".sort-btn");
button1.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price)
    generateList();
});

//Sorting the course list DESC
const button2 = document.querySelector(".sort-btn2");
button2.addEventListener("click", () => {
    courses.sort((a, b) => b.price - a.price)
    generateList();
});