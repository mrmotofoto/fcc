function titleCase(str) {
    str = str.split(" ");
    for(var i=0; i<str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
    }
    return str.join(" ");
}

titleCase("I'm a lITTLE tea POT please make me TITLECASED");