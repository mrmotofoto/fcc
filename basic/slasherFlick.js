function slasher(arr, howMany) {
    if(howMany === 0) {
        return arr;
    } else if(howMany > arr.length) {
        return [];
    } else {
        return arr.slice(howMany);
    }
 }

slasher([1, 2, 3], 2);