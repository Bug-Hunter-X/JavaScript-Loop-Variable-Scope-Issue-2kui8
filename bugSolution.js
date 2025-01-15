function myFunction() {
  let i = 0;
  let finalI = 0; //add a new variable to hold the value of i
  while (i < 10) {
    console.log(i);
    finalI = i; //update the new variable with the current value of i
    i++;
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
  }
  console.log("Final value of i:", finalI); //access the value of i from the new variable
}

myFunction();