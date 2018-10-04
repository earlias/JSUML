function reverseString(){
    var str = document.getElementById('palindrome').value;
    var rString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        rString += str[i];
    }
    document.getElementById('target').innerHTML = rString;
}