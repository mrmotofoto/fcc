function factorialize(num) {
    if(num <= 1) {
        return 1;
    } else {
        console.log("Num: " + num + " Num-1 " + num -1);
        return num * factorialize(num-1)
    }
}
factorialize(5);


function factorialize2(num){
  var result = num;
  while (num > 1) {
    num--;
    result = result * num;
  }
  return result;
}
	
