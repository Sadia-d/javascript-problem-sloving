///Write a program that counts how many vowels (a, e, i, o, u) are in a string.

function countVowels(str) {
    let vowels = 'aeiou'
    let count = 0;
    str = str.toLowerCase();
    for (let char of str) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count;
}
// console.log(countVowels('I love js'));

// Reverse a String

function reverseStr(str) {
    let reversed = "";
    for (let i = str.length - 1; i > 0; i--) {
        reversed += str[i]
    }
    return reversed
}
// console.log(reverseStr("hello")); 

//// Generate a random number between 1 and 10.

let randomNum = Math.floor(Math.random() * 10) + 1;// +1 1st value define kore
// console.log(randomNum);

/// User থেকে weight (kg) এবং height (m) ইনপুট নিয়ে BMI হিসাব করো।

let height = 1.5;
let weigth = 50;
let BMI = (weigth) / (height * height);
if (BMI < 18.5) {
    // console.log("you are underweigth")
}
else if (BMI > 18.5 && BMI < 25) {
    // console.log("Normal")
}

else if (BMI > 25 && BMI < 30) {
    // console.log("overweight")
}
else {
    // console.log("obses")
}


//{Simple Bank System

// একটা variable রাখো balance = 1000.
// তারপর function বানাও —
// deposit(amount) → balance বাড়াবে
// withdraw(amount) → balance কমাবে
// শেষে checkBalance() দিয়ে প্রিন্ট করবে।}


let balance = 1000;

function deposit(amount) {
    balance += amount;
    // console.log(`${amount} deposited. New balance: ${balance}`)
}

function withdraw(amount){
    if(balance > amount){
        balance -= amount;
        console.log(`${amount} decrease balance ${balance}`)
    }
    else{
        console.log('intialial balance' , balance)
    }
}

function checkBalance(){
     console.log( `current balance ${balance}`)
}

// deposit(500);
// withdraw(300);
// checkBalance();



//Problem:Countdown Timer
// User input: start number
// Count down to 0 (decreasing 1 per second)
// Print “Time’s up!” at the end

let start = 7;
let timer = setInterval(() => {
    // console.log(start);    
    start--;
    if(start <= 0){
        clearInterval(timer);
        // console.log('time out')
    }
  
    
}, 1000);


/// problem: Shopping Discount System
// User input: total price
// Price < 500 → no discount
// 500–1000 → 10% discount
// 1000 → 20% discount
// Output: final price


let price = 1000;
if(price < 500){
    console.log('no discount')
}

else if(price >=500 && price <1000){
     discount =  price * 10 / 100;
   
}

else if(price === 1000){
     discount = price * 20 / 100;
   
}

let final = price - discount;

console.log('total price :',price)
 console.log('discount :' ,discount);
 console.log('after discount :',final)