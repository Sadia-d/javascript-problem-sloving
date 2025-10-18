//1. Print numbers from 1 to 10........

  for(let i = 1; i <=10; i++){
    // console.log(i)
  }

  //2. Print the odd numbers less than 100
 
  for(i =1 ; i<100 ; i++){
    if(i % 2 === 1){
      // console.log('odd number :' , i)
    }
  }

  // Print the multiplication table with 7
  
  let table = "";
 for(let i = 1; i<=10; i++){
    table += " 7 x " + i + " = " + (7 * 1) + "\n";
 }
//  console.log(table);

// Print all the multiplication tables with numbers from 1 to 10
 for(let n = 1 ; n <=10; n++){
  for (let i = 1; i <= 10; i++) {
    // console.log(`${n} x ${i} = ${n * i} \n`)
  }
 }

//// Print the multiplication table with 3

for(let i =1 ; i<=10 ; i++){
  console.log(`3 x ${i} = ${3 * i}`)
}
