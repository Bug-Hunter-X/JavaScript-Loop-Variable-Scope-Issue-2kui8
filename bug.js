function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
  }
}

myFunction();

//this will run only 5 times because of the break statement when i=5. 
//however if you try to access i outside the while loop , its value is still 5. this is a potential bug.