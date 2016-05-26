function mutation(array) {
  for (var i = 0; i < array[1].length; i++) {
    if (array[0].toLowerCase().indexOf(array[1][i].toLowerCase()) < 0) {
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);