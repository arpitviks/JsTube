var isEven = (element) => {
    // if((element & 1) === 0)
    // return true;
    return (element & 1) == 0;
};

// var result = [2, 4, 6, 8].every(isEven);
var result = [2, 4, 6, 8].every((e) => (e & 1) === 0);
console.log(result);