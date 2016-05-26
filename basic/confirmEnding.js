function confirmEnding(str, target) {
    str = str.split("").slice(-target.length);
    target = target.split("");
    for(var i=0; i < target.length; i++) {
        if(str[i] !== target[i]) {
            return false;
        } else {
           continue;
        }
    }
    return true;
}
confirmEnding("He has to give me a new name", "me");

