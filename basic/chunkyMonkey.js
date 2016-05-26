function chunkArrayInGroups(arr, size) {
    var tempArr = [];
    var finalArr = [];
    for(var i=0; i < arr.length; i++) {
        tempArr.push(arr[i]);
        if(tempArr.length === size) {
            finalArr.push(tempArr);
            tempArr = [];
        }
    } //end for loop-------------------
     if(tempArr.length > 0) {
        finalArr.push(tempArr);
    }
    return finalArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);