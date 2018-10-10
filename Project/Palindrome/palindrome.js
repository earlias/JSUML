function reverseString(){
    var str = document.getElementById('palindrome').value;
    var rString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        rString += str[i];

    if(str == rString) {
        document.getElementById('target').innerHTML = 'That is a palindrome!';
    } else {
        document.getElementById('target').innerHTML = 'That is not a palindrome!';
        }
    }
}