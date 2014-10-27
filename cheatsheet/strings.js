/*string practice*/
/*
var name = "Joe";
console.log(name);
var statement = "this is Joe's stringing";
console.log (statement);
var path = "C:\\folder\\myfile.txt";
console.log(path);
var multiline = "this is line 1\n" +
              "this \tis line 2\n" +
              "this is line 3";
console.log(multiline);

var part1 = "Hello ";
var part2 = "World!";
var whole = part1 + part2;
console.log(whole + "!!!");

var length = whole.length;
console.log(whole, length)

var index = whole.indexOf("world");
console.log(index)

if (whole.indexOf("c") !== -1){
  console.log("It exists in the string")
} else {
  console.log("it doesnt exist");
}

console.log(whole.charAt(2));
"Hello World!"
var world = whole.substr(6, 5);
console.log(world);
console.log(whole.toLowerCase());
console.log(whole);
console.log(whole.toUpperCase());
console.log(whole);
*/
/*
var first = "Hello"
var second = "hello"

if (first === second){
  // "13"==13 but "13" !=== 13
console.log("the strings are equal");
} else {
  console.log("The strings are different");
}
//non case sensitive test
if (first.toLowerCase === second.toLowerCase){
  // "13"==13 but "13" !=== 13
console.log("the strings are equal");
} else {
  console.log("The strings are different");
}
// other comparators <
function compare(a, b){
  console.log(a + " <= " + b, a<=b);
}
compare('c', 'b');
compare('apples', 'oranges');
compare('apples', 'applications');
compare('app', 'apples');
compare('hello', 'hello');
// only one type of number in javascript
var e = 0.1,
    f = 0.2;
var result = e * f;
console.log(result)

var g = 1.23E6;
var h = 012;
//this is 10 it is an octal number
//any time you start with a 0
//each place is 0-7 so 1=8 and 2=2
//but 019 is not octal it is read as decimal literal
//hexadecimal numbers base 16
//ff 00 00 start hexidecimal with 0x
*/
/*
var i = 0x10;
var j = parseInt("019", 10);
//second argument for parse to say decimal
var k = parseInt("0101010010", 2);
var m = parseInt("there are 23 people", 10);
//any operation after you get NaN will be NaN
//all the way up your javascript when over this NaN is used. NaN+3 == NaN

//NaN is not equal to itself

var u = Math.round(Math.random()*10);

var v = Math.round(2.5);
//math rounds up from .5
var w = Math.floor(3.7);
var y = Math.pow(2,5);
var z = Math.sqrt(5);
*/
/*
var x = ["some","words","here"];
console.log(x.length);
var y = ['a string', 3, ['a sub array', 2,3,3], function(a,b){return a+b;}];
console.log(y);
var z = [];
var a = new Array(50);
// creates 50 elements for some reason that are empty
var my_array = ['Hello',42,true,function(a){return a * 2}];
var word = my_array[0];
var answer = my_array[1];
var doubler = my_array[3];
console.log(doubler(10));
my_array[1] = 144;
var new_answer = my_array[1];
//answer doesn't get udpated to 144
my_array[my_array.length] = "A new String";
//my_array[7] = "another new string";
my_array[my_array.length] = "A new String";
my_array[my_array.length] = "A new String";
my_array[my_array.length] = "A new String";
//Methods
// push and pop;
var my_array = [2,3,4];
console.log(my_array.toString());
my_array.push(5);
console.log(my_array.toString());
var value = my_array.pop();
console.log(my_array.toString());
*/

/*
var my_array = [2,3,4];
console.log(my_array.toString());

my_array.unshift(1);
console.log(my_array.toString());
//unshift adds an element, has a u like push

var value = my_array.shift();
console.log(my_array.toString());
//shift is like pop from the front
*/

var students = ["Joseph", "Susan", "William", "Elizabeth"]

var scores = [ [80, 70, 70, 100],
               [85, 80, 90, 90],
               [75, 70, 80, 75],
               [100, 90, 95, 85] ]

var average = function (array) {
  var sum = array.reduce (function(total, num){return total + num},0)
  return sum / array.length;
  };

 console.log(average ([1,2,3]))
/*
var sum = 0;
var elmt = [1,2,3,4]
for(var i = 0; i < elmt.length; i++){
  sum += elmt[i];
 }
var avg = sum / elmt.length
var sum = elmt.reduce(function(a, b) { return a + b });
var avg = sum / elmt.length;
var classroom = [students[]:scores[[]]]
// console.log(elmt);
*/