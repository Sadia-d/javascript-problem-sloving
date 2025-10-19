
// Create an array with 5 fruits and print each fruit using a loop.

let fruits = ['apple','jackfruit',' orange','mango','berry'];

for(let fruit of fruits){
//    console.log(fruit)
 };

//Find the length of an array.

let array = [1,2,3,4,5];
// console.log(array.length);


// Add one new element to the end of an array.
let addNewEnd = [1,2,3,4]
addNewEnd.push(5);
// console.log(addNewEnd);

//Add one new element to the beginning of an array

let addNewFirst = [1,2,3,4]
addNewFirst.unshift(0);
// console.log(addNewFirst);


// Check if a given item exists in an array or not.

let exitElement = [1,2,34,52,5];

if(exitElement.includes(5)){
        // console.log('true')
    }
    else{
        // console.log("false");       
    
}
  
/// Convert an array into a single string separated by commas.

let convert = ['Hello','I','am','sadia'];
let join = convert.join()

// console.log(join)


/// Reverse an array without using a loop.

let reverseArrays = [1,2,3,4,5,6];
reverseArrays.reverse();
// console.log(reverseArrays)


// Create a new array that contains only positive numbers.

let positiveNumbers =[1,2,-3,5,3,-5,4,-1];
for(let number of positiveNumbers){
    if(number >0){
        // console.log(number);        
    }
}


// Use .map() to square each number in an array.

let squareArray =[1,2,3,4,5,6];
let square=squareArray.map((x)=> x*x);
// console.log(square)


// Use .filter() to get numbers greater than 10.

let filterMaxNum = [12,3,4,232,523,2,31,1]
// console.log(filterMaxNum.filter((a)=> a >10));

//Use .reduce() to calculate the total sum of all numbers.

let sumOfNumbers = [1,2,3,4,5,6]
// console.log(sumOfNumbers.reduce((acc,curr) => acc + curr));

/// Use .sort() to sort numbers in ascending order.
  
let sortNumber = [12,32,43,2,11]
// console.log(sortNumber.sort())
//.sort() method arr-এর elements গুলোকে ascending (alphabetical) order-এ সাজায় এবং মূল array-টিকেই পরিবর্তন করে।

/// Merge two arrays into one.
let array1 = [1,2,3,4]
let array2 =[5,6,7]
// console.log(array1.concat(array2));

// Check if all numbers are positive using .every().

let checkPositive = [1,2,3,-4,5,6]
console.log(checkPositive.every((n) => n >0)) // It returns false if it finds one element in the array that does not exist Otherwise, it returns true.

// Write a program to find the largest number in an array.

function maxNumberOfArray(numbers){
   const max = Math.max(...numbers);
//    console.log(max)
}
maxNumberOfArray([12,32,22,44,23,75,11,3,2]);

// Write a program to find the smallest number in an array.

function minOfArray(num){
     return Math.min(...num)
}
let minNumber = minOfArray([12,43,22,6,1,36,8]);
// console.log(minNumber);

// Write a program to count how many even numbers are in an array.

function countEven(numbers){
    let count = 0;
  for(let number of numbers){
    if(number % 2 === 0){
       count++
    }
  }
  return count;
}

 let count =  countEven([1,2,3,4,5,6,7,8]);
//  console.log(count);
 
// another way ....

function countEvenNum(numbers){
   return numbers.filter((n)=>n % 2 === 0).length;
}
let counts =  countEven([1,2,3,4,5,6,7,8]);
// console.log(counts);


/// Write a program to sum all the numbers in an array.

function sumOfArray(num){
        let sum = 0;
        for(let n of num){
                sum+=n
            }
        return sum
}

let sumNumber = sumOfArray([1,2,3,4,5,6,7,8]);
// console.log(sumNumber);

// another way ......
function sumOfArrays(nums){
 return nums.reduce((acc,curr)=> acc+curr)
}

let sumNumbers = sumOfArray([1,2,3,4]);
// console.log(sumNumbers);

// Write a program to reverse an array without using .reverse().

function reverseArray(array){
    let reversed = [];
    for(let arr of array){
        reversed.unshift(arr)
    }
    return reversed
} 

let reversed = reverseArray([1,2,3,4]);
// console.log(reversed);

// Write a program to remove duplicate values from an array.
function removeDuplicate(arr){
    return [...new Set(arr)];
}
// console.log(removeDuplicate([1,2,3,4,1,3,12,56,3,77,12,12,12]));

