function task6() {
    console.clear();
    console.log("TASK 6: Variables and data types");

    let fullName = "Anel Savit";
    const age = 18;
    let isStudent = true;
    const favouriteColour = "Sky blue and black";
    console.log("Full name:", fullName);
    console.log("Type:", typeof fullName);

    console.log("Age:", age);
    console.log("Type:", typeof age);

    console.log("Is student:", isStudent);
    console.log("Type:", typeof isStudent);

    console.log("Favourite colour:", favouriteColour);
    console.log("Type:", typeof favouriteColour);

    fullName = "Anel";
    console.log("New name:", fullName);
    console.log("const is used for values that should not be reassigned.");
}


function task7() {
    console.clear();
    console.log("TASK 7: Input and a greeting");

    let name = prompt("What's your name?");

    if (name === null || name.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    alert("Hello, " + name + "! Welcome to JavaScript.");

    let studentInfo = "Anel" + " - Group " + "MT-2506";
    console.log(studentInfo);
}


function task8() {
    console.clear();
    console.log("TASK 8: Sum and arithmetic");

    let firstNumber = prompt("Enter the first number:");
    let secondNumber = prompt("Enter the second number:");

    if (
        firstNumber === null ||
        secondNumber === null ||
        firstNumber.trim() === "" ||
        secondNumber.trim() === ""
    ) {
        alert("Please enter two numbers.");
        return;
    }

    let a = Number(firstNumber);
    let b = Number(secondNumber);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (b === 0) {
        alert("The second number must not be zero.");
        return;
    }

    console.log("First number:", a);
    console.log("Second number:", b);

    console.log("Sum:", a + b);
    console.log("Difference:", a - b);
    console.log("Product:", a * b);
    console.log("Quotient:", a / b);
    console.log("Remainder:", a % b);

    console.log('"12" + "5" =', "12" + "5");
    console.log('Number("12") + Number("5") =',
        Number("12") + Number("5"));
}

function task9() {
    console.clear();
    console.log("TASK 9: Strings");

    let fullName = "AAAA";

    console.log("Full name:", fullName);
    console.log("Length:", fullName.length);
    console.log("Uppercase:", fullName.toUpperCase());
    console.log("Lowercase:", fullName.toLowerCase());
    console.log("First three characters:", fullName.slice(0, 3));

    let firstText = "I am learning JS";
    let secondText = "Second year student";

    let sentence = firstText + " " + secondText;

    console.log("Combined:", sentence);
}


function task10() {
    console.clear();
    console.log("TASK 10: Assignment operators");

    let counter = 22;

    counter++;
    console.log("After ++:", counter);

    counter--;
    console.log("After --:", counter);

    counter += 1;
    console.log("After +=1:", counter);

    counter -= 10;
    console.log("After -=10:", counter);

    counter *= 36;
    console.log("After *=36:", counter);

    counter /= 2;
    console.log("After /=2:", counter);
}


function task11() {
    console.clear();
    console.log("TASK 11: Dog age calculation");

    let dogAge = 3;
    let humanAge = (dogAge - 2) * 4 + 21;

    console.log(
        "Dog age is " + dogAge +
        ". Human age is " + humanAge + "."
    );

    dogAge = 5;
    humanAge = (dogAge - 2) * 4 + 21;

    console.log(
        "Dog age is " + dogAge +
        ". Human age is " + humanAge + "."
    );
}


function greetUser(name) {
    console.log("Hello, " + name + "!");
}

function calculateSum(a, b) {
    return a + b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}

function task12() {
    console.clear();
    console.log("TASK 12: Functions");
    greetUser("Alina");
    greetUser("Buba");

    console.log("Sum of 3 and 4:", calculateSum(3, 4));
    console.log("Sum of 10 and 5:", calculateSum(10, 5));

    console.log(
        "Rectangle area (4 x 6):",
        calculateRectangleArea(4, 6)
    );

    console.log(
        "Rectangle area (5 x 3):",
        calculateRectangleArea(5, 3)
    );
}
