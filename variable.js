var name = "Hello Veri"
console.log(name);

console.log("hello world");

let hobby = "GAME"
console.log(hobby);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let counter = 0
while (counter < 10) {
    console.log(counter)
    counter++
}

function sayHello(name) {
    switch (name) {
        case "Verry":
            return "Hi Verry";
        case "AlFauzi":
            return "Hi AlFauzi";
        case "Akhmad":
            return "Hi Akhmad";

    }
}

console.log(sayHello("Verry"));
console.log(sayHello("AlFauzi"));
console.log(sayHello("Akhmad"));

const exampValue = 90

if (exampValue > 80) {
    console.info("GOOD");
} else if (exampValue > 60) {
    console.info("Not Bad")
} else {
    console.info("Try Again")
}