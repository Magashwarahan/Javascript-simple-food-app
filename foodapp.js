//THIS IS A SIMPLE FOOD APP
//THIS CODE  WORKS IN GOOGLE CONSOLE
//SO TRY IT IN CONSOLE!!

console.log("hello welcome to the food app");
console.log("lets create a account");

var username = prompt("please create a user name");
var password = prompt("please create a password");
console.log("thank you your account have been created");

console.log("please enter your log in information");

var tryuser=prompt("Re-enter your username");
var trypass=prompt("Re-enter your password");

while(username != tryuser && password != trypass){
console.log("wrong username and password");
var tryuser=prompt("enter your username");
var trypass=prompt("enter your password");
}
console.log("u are connected");

var balance = 10;
console.log("your current balance is " + balance + " dollars");
var q1= prompt("would u like to add money to your account. if yes type yes,if no type no");

if (q1 == "yes"){
var q2 = prompt("how much money do u want to add to your account");
var balance = balance +  Number(q2);
console.log("your new balance is " + balance  + " dollars");

}else{
console.log("great");
}

var q4 = prompt("do u like to have a burger. if yes type yes, if no type no");
if (q4 == "yes"){
console.log("choose a burger to eat");
var burgertypes = ["cheese burger","fish burger","all dress burger"];
var burgerprices= [2,3,4];
console.log("choice1 "+burgertypes[0] + "  " +burgerprices[0]+ " dollars");
console.log("choice2 "+burgertypes[1] + "  " +burgerprices[1]+ " dollars");
console.log("choice3 "+burgertypes[2] + "  " +burgerprices[2]+ " dollars");

var q5 = prompt("what is your chioce");
if(q5 == "choice1"){
console.log("you have ordered  " + burgertypes[0]);
console.log("the total of your order is " + burgerprices[0]+ " dollars");
var total = balance - burgerprices[0]
console.log("u have "+ balance + " dollars left in your balance");
}else if(q5 == "choice2"){
console.log("you have ordered " + burgertypes[1]);
console.log("the total of your order is " + burgerprices[1]+ " dollars");
var total = balance - burgerprices[1]
console.log("u have "+ balance + " dollars left in your balance");
}else if (q5 == "choice3"){
console.log("you have ordered " + burgertypes[2]);
console.log("the total of your order is " + burgerprices[2]+ " dollars");
var total = balance - burgerprices[2]
console.log("u have "+ total + " dollars left in your balance");
}

}else{
console.log("have a great a day!!! and thank u for visiting!!!");
}
