console.log("connected!")

let favNum = prompt("What's your favorite number?")
if (favNum >= 1000) {
    console.log("Woah, that's a big number!");
    alert("Woah, that's a big number!");
} else if (favNum  >= 0) {
    console.log("That's a cool number!");
    alert("That's a cool number!");
} else if (favNum <= 0) {
    console.log("Negative numbers!?  That's just bananas!");
    alert("Negative numbers!?  That's just bananas!");
}
    else if (typeof favNum === 'string') {
    alert("Enter valid integer");
    }
