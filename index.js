// Assignment # 21 - 25

// Question 1
// var first = prompt("Enter your First Name")
// var last = prompt("Enter your last Name")
// alert("Welcome " + first + " " + last + " to our website!");

// Question  2

// var model  = prompt("Enter your Favorite mobile phone model.");
// document.write("My favorite mobile phone model is " + model + ".");
// document.write("<br> Length  of string is " + model.length );

// Question 3

// var a = "Pakistani"
// document.write("String: " + a + "<br> Index of  'n' is " + a.indexOf('n'));

// Question 4

// var b =  "Hello World"
// document.write("String: " + b + "<br> Last index of 'l' is " +  b.lastIndexOf('l'));


// Question 5

// var string  = "Pakistani";
// document.write("Character at index 3: "+  string.charAt(3));

// Question 6

// var first1 = prompt("Enter your First Name")
// var last1 = prompt("Enter your last Name")
// var fullname = first1.concat(" ", last1);

// alert("Hello "+ fullname + " !");

// Question 7

// var city = "Hyderabad"
// document.write("City: "+ city);
// var str = "Islam" + city.charAt(5) + city.charAt(6) + city.charAt(7) + city.charAt(8);
// document.write("<br> After Replacement: " + str);

// Question 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace =  message.replaceAll("and", " & ");
// document.write(replace);

// Question 9

// var srt  = "472";
// document.write("Value: "+ srt + "<br>Type: "+ typeof srt)
// document.write("<br>Value: "+ srt + "<br>Type: "+ typeof Number(srt));

// Question 10

// var user  = prompt("Enter dry fruit");
// document.write("User Input: "+ user + "<br>Upper Case: " + user.toUpperCase());

// Question 11

// var us  = prompt("Enter");
// var x = us.replace(us.charAt(0),us.charAt(0).toUpperCase())
// document.write("User Input: " + us + "<br>Tittle Case: " + x);

// Question 12

// var num =  35.36;
// var num1 = num.toString().replace('.', '');
// document.write("Number: " + num + "<br>Result: " + num1);

// Question 13

// var username = prompt("Enter your username");
// if(username.includes(String.fromCharCode(33)) || username.includes(String.fromCharCode(44))|| username.includes(String.fromCharCode(46)) || username.includes(String.fromCharCode(64))){
// alert("Please Enter Valid username")
// }

// else{
//     alert("Welcome " + username + "!")
// }

// Question 14

// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var search = prompt("Enter your selected item").toLowerCase();
// if(a.includes(search)){

//     alert(search + " is found at index "+a.indexOf(search) +" in our list")
// }
// else{
//     alert(search + " is not found in our list")
// }

// Question  15

// var password = prompt("Enter your password");

// if (password.length < 6) {
//     alert("Password should be at least 6 characters long")
// }
// else if (password[0] >=  0 && password[0] <= 9 ) {

//     alert("Password should not start with a number" + "\nPlease enter a valid password")

// }
// else if (!/[a-zA-Z]/.test(password)  || !/[0-9]/.test(password)){
//     alert("Password should contain alphabets and numbers" + "\nPlease enter a valid password")

// }
// else {
//     alert("Password Match!")
// }

// Question 16

// var university = "University of Karachi";
// var array  = university.split("");
// console.log(array);

// Question  17

// var user = prompt("Enter something");
// var a = user.lastIndexOf("")
// var b = user.charAt(a-1)
// console.log("User Input: "+  user +  "\nLast character of the input: " + b);


// Question 18

// var sentence = "The quick brown fox jumps over the lazy dog";
// var words = sentence.toLowerCase().split(" ");
// var count = 0;
// for(i=0;  i<words.length; i++){
//     if(words[i] === "the"){
//         count++;
//     }
// }
// document.write("There are "+ count + " occurrence(s) of word 'the': ");



// Assignment # 26 - 30

// Question 1


// var integar = +prompt("Enter  a number");
// document.write('Number : ' + integar + '<br>');
// document.write('Round off value : ' + Math.round(integar) + '<br>');
// document.write('Floor value : ' + Math.floor(integar) + '<br>');
// document.write('Ceil value : ' + Math.ceil(integar));


// Question  2

// var negative  = +prompt("Enter a negative number");
// document.write('Number : ' + negative + '<br>');
// document.write('Round off value : ' + Math.round(negative) + '<br>');
// document.write('Floor value : ' + Math.floor(negative) + '<br>');
// document.write('Ceil value : ' + Math.ceil(negative));

// Question 3 

// var absoulte  = +prompt("Enter a number");
// document.write('The absolute value of '+  absoulte + ' is ' + Math.abs(absoulte));

// Question  4

// var diceValue  = Math.floor(Math.random() * 6);
// document.write('The value of dice is ' + diceValue);

// Question 5

// var coin =  Math.floor(Math.random() * 2)+1;
// if(coin === 1){
//     document.write(coin +'<br>Random coin value: Heads');
// }
// else{
//     document.write(coin +'<br>Random coin value: Tails');
// }


// Question 6

// var random = Math.floor(Math.random()*100)+1;
// document.write('Random number between 1 and 100 is ' + random);

// Question 7

// var weight  = parseFloat(prompt("Enter your weight in kilograms"));
// if(!isNaN(weight)){
//     document.write('Your weight is ' + weight + ' kilograms');
// }
// else{
//     alert('Please enter a valid weight');
// }

// Question 8

// var Guess  = +prompt("Guess the number between 1 to 10");
// var secret = Math.floor(Math.random()*10)+1;
// if(Guess === secret){
//     alert("Congratulations ! You guessed the number correctly");
// }
// else if(Guess === secret-1  || Guess === secret+1){
// alert("You were close enough to the correct answer");
// }
// else{
//     alert("Try again, the correct answer is " + secret);
// }

// Assignment 31 - 34

// Question 1

// var currentDate  = new Date();
// document.write(currentDate);

// Question  2

// var  months = ["January", "February", "March", "April", "May", "June","July","Augest",  "September", "October", "November", "December"];
// var currentDate  = new Date().getMonth();
// var  monthName = months[currentDate];

// document.write("Current month: " +  monthName);

// Question 3

// var currentDate =  new Date().getDay();
// var days  = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDay = days[currentDate];
// document.write("Today is " + currentDay);

// Question  4

// var day  = new Date().getDay();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"  , "Saturday"];
// var  currentDay = days[day];
// if(currentDay  === "Sunday" || currentDay === "Saturday"){
//     document.write("It's  Fun day");

// }
// else{
//     document.write("Go to work");
// }

// Question  5

// var myDate = new Date().getDate();
// if(myDate < 16){
//     document.write("“First fifteen days of the month”");
// }
// else{
//     document.write("“Last days of the month”.");
// }

// Question 6

// var  todayDate = new Date();
// var MillisecondsSince1970  = todayDate.getTime();
// var minutesSince1970 = (todayDate.getTime() / (1000 * 60));
// document.write("Current Date : " + todayDate);
// document.write("<br>Milliseconds since January 1, 1970: " +  MillisecondsSince1970);
// document.write("<br>Elapsed minutes since January 1, 1970: " + minutesSince1970);


// Question 7

// var time  = new Date().getHours();
// console.log(time)
// if(time < 12){
//    alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

// Question  8

// var laterDate = new Date(2020, 11, 31);
// document.write(laterDate)

// Question  9

// var Ramadan = new Date(2024,2,11);
// var today = new Date();
// var difference = today - Ramadan;
// var days = Math.floor(difference / (1000 * 60 * 60 * 24));
// document.write("Number of days past since 1st Ramadan: " + days + " days");


// Question  10

// var  todaydate = new Date();
// var from2015  = new Date(2015, 0, 1);
// var difference = todaydate - from2015;
// var days = Math.floor(difference / 1000);
// document.write("On Refrence date " + todaydate + "<br> Number of seconds elapsed since beginning of 2015 is " + days + " seconds");


// Question 11


// var currentDate = new Date();
// document.write("Current date: " + currentDate + "<br>");
// currentDate.setHours(currentDate.getHours() - 1);
// document.write("1 hour ago, it was: " + currentDate);


// Question  12

// var  current = new Date();
// alert("Current date: " + current)
// current.setFullYear(current.getFullYear()-100)
// alert("100 years back, it was: "+ current);

// Question 13

// var age = +prompt("Enter your Age");
// var year = new Date()
// year.setFullYear(year.getFullYear()- age)
// alert("Your age is "+ age + "\nYour Birth Year is "+ year.getFullYear());


// Question 14

// var currentname = prompt('Enter Your Name')
// var realname = currentname.replace(currentname.charAt(0),  currentname.charAt(0).toUpperCase())
// var currentdate = new Date().getMonth();
// var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentmonth = monthnames[currentdate];
// var unit = +prompt("Enter your "+ currentmonth + " units");
// var perunit = 16;
// var dueAmount = perunit * unit;
// var netamount = dueAmount.toFixed(2);
// var latepay = 350;
// latepay = latepay.toFixed(2);
// var grosspay = parseFloat(netamount) + parseFloat(latepay);
// grosspay = grosspay.toFixed(2);
// document.write("<h1>K-Electric Bill</h2>");
// document.write("Customer Name: "+ realname);
// document.write("<br>Month: "+ currentmonth);
// document.write("<br>Number of Units: "+ unit)
// document.write("<br>Charges per Unit: "+ perunit)
// document.write("<br>Net Amount payable (with Due Date): "+ netamount)
// document.write("<br>Late Payment Surcharge: "+ latepay)
// document.write("<br>Gross Amount Payable (After Due Date): "+ grosspay);


// Assignment # 35 - 38

// Question 1

// var currenttareeq = new Date();
// function fordate (currenttareeq) {
//     return(currenttareeq)
// }
// document.write(fordate(currenttareeq));

// Question  2

// var name1  = prompt("Enter your first name");
// var name2 = prompt("Enter your second name");
// var realname1 = name1.replace(name1.charAt(0),  name1.charAt(0).toUpperCase());
// var realname2 = name2.replace(name2.charAt(0),  name2.charAt(0).toUpperCase());

// function  greet(name1, name2){
//     return("Welcome " + realname1 + " " + realname2 + " to our website!");
// }
// alert(greet(name1,  name2));


// Question  3

// var no1  = +prompt("Enter first number");
// var no2 = +prompt("Enter second number");
// function  add(no1, no2){
//     return(no1 + no2);
// }
// console.log("The Result is " + add(no1,  no2));

// Question  4

// var num1  = +prompt("Enter first number");
// var operation = prompt("Enter Operation")  
// var num2 = +prompt("Enter second number");

// function calculator(a,b,c){
//     if(operation == "+"){
//         return(num1 + num2)
//     }
//     else if(operation == "-"){
//         return(num1 - num2)
//     }
//     else if(operation == "*"){
//         return(num1 * num2)
//     }
//     else if(operation == "/"){
//         return(num1 / num2)
//     }
//     else if(operation == "%"){
//         return(num1 % num2)
//     }
//     else{
//         return("Invalid Operator or Number")
//     }
// }
// alert(calculator(num1, operation, num2));


// Question 5

// function square(number){
//     return(number * number)
// }
// console.log(square(5));

// Question 6

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5)); 
// console.log(factorial(0)); 

// Question 7

// var n1 = +prompt("Enter first number")
// var n2 = +prompt("Enter final number")

// function counting(n1,n2){
//     var add = ""
//     for(var i=n1; i<=n2; i++){
//        add += i + " " 
//     }
//     return(add)
// }
// document.write("Counting: " + counting(n1,n2));

// Question  8


// var base = 3;
// var perpendicular  = 4;

// function hypotnenuse(base, perpendicular){

//     function sqaure(number){
//         return(number * number)
//     }
//     var base1 = sqaure(base) +  sqaure(perpendicular);
//     var result = Math.sqrt(base1)
//     return (result)

// }
// console.log(hypotnenuse(base, perpendicular)); 


// Question 9

// var width = 5;
// var height = 10;
// function area(width, height){
//     return width * height
// }
// console.log(area(2, 4));
// console.log(area(width, height));


// Question 10

// var str = prompt("Enter Something");
// function palindrome(str){
//     if(  str === str.split("").reverse().join("")){
//         return ("This is palindrome")

//     }
//     else{
//         return ("This is not palindrome")
//     }

// }
// alert(palindrome(str));

// Question 11

// var string = "the quick brown fox";
// function capitalizewords(str){
//     var words = str.split(' ');
//     for(var i = 0; i < words.length; i++){
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//     }
//     return words.join(' ');
// }
// console.log("EXAMPLE STRING "+ string)
// console.log("EXPECTED OUTPUT: "+ capitalizewords(string));

// Question 12

// var string = prompt("Enter a sentence")
// function longestword(string) {
//     var b = string.split(" ");
//     var longest  = "";
//     for(i=0; i<b.length; i++){
//         if(b[i].length > longest.length){
//            longest = b[i];
//         }
//     }
//           return longest;

// }
// console.log("EXAMPLE STRING : "+  string)
// console.log("EXPECTED OUTPUT :  "+ longestword(string));



// Question  13

// var word  = "Hassan"
// var letter  = "a";
// function countLetters(word, letter) {
//    count  = 0;
//    for (var i = 0; i < word.length; i++){
//     if(word[i] === letter){
//         count++;
//     }
//    }
// return  count;
// }
// console.log(`The letter "${letter}" occurs ${countLetters(word, letter)} times in "${word}".`);



// Question  14

// var pi = 3.142
// var radius = 5
// function Circumferenceofcircle(pi, radius) {
//     var a = 2 * pi * radius
//     return a.toFixed(2)

// }
// console.log("The circumference of the circle is: " + Circumferenceofcircle(pi, radius) + " units");

// function Areaofcircle(pi, radius) {
//     var b = pi * radius * radius
//     return b.toFixed(2)

// }
// console.log("The area of the circle is: " + Areaofcircle(pi, radius));



/*  Assignment Completed  */









