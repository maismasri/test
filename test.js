function calculateSum(arr) {
    var sum = 0;
    var i=0;
    for(i = 0; i < arr.length; i++) {  // خطأ: متغير i مش معرف بـ var/let
        sum += arr[i];
    }
    return sum;
}

var numbers = [1, 2, 3, 4, 5];

console.log("Total is: " + calculateSum(numbers));

function greetUser(name) {
    if(name) {
        console.log("Hello " + name);
    } else {
        console.log("Hello guest");
    }
}

greetUser("Alice");
greetUser();

function unusedFunction()
yti-mpap-ybd
