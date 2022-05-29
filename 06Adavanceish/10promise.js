const ein = () => {
    return "One";
}
const zwei = () => {
    /*This will create a new promise so that whenever we'll call this method based on the 
    response that we get we'll return the O/P
    if it is success the RESOLVE
    else it is REJECT
    */
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is Two!!!!");
        }, 3000);
    });



}
const drei = () => {
    return "Three";
}

const callme = async () => {                 //async keyword will make the method asynchronus and then only other methods inside it can use the await keyword
    let valOne = ein();
    console.log(valOne);

    let valTwo = await zwei();              //This code block will be execute once we get the resplve response from the promise
    console.log(valTwo);

    let valThree = drei();
    console.log(valThree);
}

callme();