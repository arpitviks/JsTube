const google = 'Google';
const fb = null;

if (google) {
    console.log('This will print the google');
}
//the 
if (!fb) {
    console.log('This will print the facebook only with the single \'!\' ');
}

//The value of fb is 'null' which is a FALSY value and to make it completely FALSE value we used the double exclamation [!(!fb)=  FALSE]
if (!!fb) {
    console.log('This will not print the facebook as the double shot expression has been used');
}