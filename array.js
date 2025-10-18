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

