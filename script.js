// Задание 1
let money = 10000;
let period = "day";

if (period === "day") {
    console.log(money + " р в день");
} else if (period === "week") {
    console.log(money + " р в неделю");
} else if (period === "month") {
    console.log(money + " р в месяц");
}


// Задание 2
let temperature = 25;
let sky = "clear";
let activity;

if (temperature >= 25 && sky === "clear") {
    activity = "golf";
} else if (temperature >= 10 && temperature <= 24 || sky === "cloudy") {
    activity = "bowling";
} else {
    activity = "hiking";
}

console.log(activity);


// Задание 3
let num1 = 2;
let num2 = 6;
let operation = "*";

if (operation === "/" && num2 === 0) {
    console.log("Делить на 0 нельзя!");
} else if (operation === "+") {
    console.log(num1 + num2);
} else if (operation === "-") {
    console.log(num1 - num2);
} else if (operation === "*") {
    console.log(num1 * num2);
} else if (operation === "/") {
    console.log(num1 / num2);
}


//Задание 4
let word = "меню"
let result
if (Math.sqrt(word.length)===Math.floor(Math.sqrt(word.length))){
    result= 1
}else{
    result=0
}
console.log(result)