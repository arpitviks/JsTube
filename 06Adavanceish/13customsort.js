customsort = (a, b) => {
    if (a > b) return 1;
    else if (b > a) return -1;
    else return 0;
}


var arr = [2, 3, -7, -2];
console.log(arr.sort(customsort));        //It will print the wrong O/P
