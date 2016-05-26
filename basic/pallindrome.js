function palindrome(str) {
    str = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
    var newStr = str.split('').reverse().join('');
    if(str === newStr) {
        return true;
    } else {
        return false;
    }
}
palindrome("eye");