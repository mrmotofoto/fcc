function findLongestWord(str) {
    var result = 0;
    var word = ""
    str = str.split(" ");
    for(var i = 0; i < str.length; i++) {
        if(str[i].length > result) {
            result = str[i].length;
            word = str[i];
        }
    }
    return "The longest word is: "+"\""+word+"\""+ " And its length is "+result;
}

findLongestWord("The quick brown fox jumped over the lazy dog");