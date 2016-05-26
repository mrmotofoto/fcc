function repeatStringNumTimes(str, num) {
    var newStr= str.split(" ");
    console.log(newStr);
    if(num < 1) {
        return "";
    }
    for(var i=0; i < num -1; i++) {  
      newStr.push(str);
      console.log(str);
    }
    str = newStr.join("");
    return str;
}

repeatStringNumTimes("abc", 10);