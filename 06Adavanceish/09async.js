const ein = () => {
    console.log("One");
}
const zwei = () => {
    setTimeout(() => {                      //This block will stay in the event queue and then queue will be emptied and voila!! the line wll be printed
        console.log("This is 2!!!!");
    }, 3000);
    console.log("Two");
}
const drei = () => {
    console.log("Three");
}


ein();
zwei();
drei();
