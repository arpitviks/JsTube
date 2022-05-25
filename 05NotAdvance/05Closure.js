
function init() {
    var firstName = "Hitesh";
    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName;
}

var val = init();