/*
alert("Hello World")
alert("Hello World2")
alert("Hello World3")
*/


// alert("gamosaxulebis gamotvla")

/*
var a
var a = 5 + 8;

alert(a)
*/

/*
alert("Hello World") // es amoagdebs pop up yuts igive alert boxs
console.log("Hello World") // konsolshi gamoitans infos

document.write("Hello World") // pirdapir html shi dawers teqsts

console.log("ola")

var a = 5 + 8;

console.log("output")

console.log()
*/

/*

var myIncome, percent, sum;

myIncome = 120000;

percent = 15;

sum = myIncome / percent;

console.log(sum)

// number

var x = 45;

var y = 23.232322;

// string

var companyName = "Comm school"

var CompanyNaame = "Gita"

var CompanyName = "Pyme"

// boolean

var isAlie = true;

var isDead = false;

// null and undefined

var isUndefined 
console.log(isUndefined)

// check data type

var name = "Tom"

console.log(typeof FIrstname)

var income = 45.8;
console.log(typeof income)

var isEnabled = true;
console.log(typeof isEnabled);

var isUndefined;
console.log(typeof isUndefined)


*/

// var x = 10;

// var y = x - 50; // 40

/*

var x = 5;
x++;

console.log(x)

var y = 5;

var z =  --y // decrement

// console.log(z) // 4


/*
var a = 5;

var b = a--;

console.log(a) // 4
console.log(b) // 5
*/

/*

var x = 10;

var y = 5 + (6-2) * --x;

console.log(y) // 41

var income = 100;

var strIncome = "100"

var result1 = income == strIncome; // true

var result2 = income === strIncome; // false


*/

// and &&

var income = 100;

var percent = 10;

var result = income > 50 && percent < 12;

console.log(result)

// || 

var income = 100;

var percent = 10;

var result = income > 50 || percent < 12;

console.log(result)


////////////////////////


var income = 100;

var result1 = !(income > 50);

console.log(result1) // false radganac income > 50

var name = "Rezo";
var surname = "Xuchua";
var fullname = name + " " + surname;

console.log(fullname)

///////////////////

var strSum = prompt("sheiyvanet anabris  tanxa", 1000);
var strPercent = prompt("sheiyvanet  saprocento ganakveti", 10)
var sum = parseInt(strSum);
var percent = parseInt(strPercent)

sum = sum + sum * percent / 100;

document.write("procentis daricxvis shemdeg anabris tanxa iqneba" + sum)


////////////////////

// var myarray = new Array()

var people = ["Tom", "Alice", "Sam"]

console.log(people)

var person3 = people[2]
console.log(person3)


///////////////////////////////////

var people = [
    ["Tom,", 25],
    ["Bill", 26],
    ["Alice", 22]

]



////////////////////////////////

var people = ["Tom", "Bill", "Alice"]
console.log(people[0])

people[0] = "Bob"

console.log(people[0])

//////////////////////////////

var income = 100;
if (income > 50) {
    var message = "Shemosavali metia 50ze"
    alert(message)
}

/////////////////////////////////

var income = 100;
var age = 19;

if (income < 150 && age > 18) {
    var message = "shemosavali metia 50ze"
    alert(message)
}

////////////////////////////////

var income = 300;
if (income < 200) {
    alert("low salary")
} else if (income >= 200 && income <= 400) {
    alert("average salary")
} else {
    alert("high salary")
}

/////////////////////////////////

switch (income) {
    case 100:
        console.log("salary");
        break
    case 200:
        console.log("salary = 200");
        break
    case 300:
        console.log("salary = 300")
        break;
}

///////////////////////////

var strPropt = propt("enter your salary")