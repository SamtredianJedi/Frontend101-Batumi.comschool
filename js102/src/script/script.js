var people = ["Tom", "Alice", "Bob", "Sam"];

for (var i = 0; i < people.length; i++) {
    console.log(people[i])
}

// for(indexi in masivi) { 
// moqmedebebi
// }


var people = ["Tom", "Alice", "Bob", "Sam"];

// for(var index in people) {
//   console.log(people[index])
// }

var people = ["Tom", "Alice", "Bob", "Sam"];

var index = 0;

while (index < people.length) {
    console.log(people[index])
    index++;
}

function display() {
    document.write("Hello World")


}

function goodMorning() {
    document.write("good morning")
}

function goodMorning() {
    document.write("good night")
}

var message = goodEvening
message();

///////////////

function display(x, y) {
    if (y === undefined) y = x;
    var z = x * x;
    console.log(2)


}



function display() {
    var z = 1;
    for (var i = 0; i < arguments.length; i++)
        z = arguments[i]
    console.log(z)
}

// display[6]
// display(6,4,5)

function display(x, func) {
    var message = func(x);
    document.write(message)
}

function welcomeMessage(time) {
    if (time < 12)
        return "good morning"
    else
        return "good evening"
}

display(13, welcomeMessage)