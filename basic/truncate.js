function truncateString(str, num) {
    if(num <= 3) {
        str = str.slice(0, num) + "...";
    } else if(str.length > num) {
        str = str.slice(0, (num -3)) + "...";
    }
    return str;
}
truncateString("Absolutely Longer", 2);

