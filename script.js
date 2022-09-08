//in this project we are making a profile statistic. we have to make a function which increase the data in number from zero to its actual value. for this, first of all we have to target the number of all elements and take them into a variable. then i am using forEach method to apply a function upon the numbers of all elements which are stored as a array of numbers. through this function first of all we are making numbers value "zero" through target their element's innerText. then in this forEach method that contains in it a function already we are making one more function (nesting) that we will call inside forEach method. through this function we want to increase the zeroed values to their original value in a visual increasing order. first of all we have stored current value(0), data-ceil, and increment formula in different variables. increment formula has been dettermined in a way that all values, whether big or small, complete their increment at same time. then, we have given currentNum its value as currentNum (0)  and increment formula (data-ceil / 20). so, all the values are now in accordance with formula after associating this currentNum with elements(represented by number perameter), for ex:- 1, 6, 10. we have applied math.ceil method get upper value without decimals. but, we have gotten so far these aforementioned values, we want increment order till they reach thier data-ceil. so to do so, we are using setTimeout function with if statement. Note, setTimeout inside function work multiple times and to stop it we use it under if else statement. okay, now we know our current values are based on formula and they are 1,6,10. when setTimeout will execute function again in given time they will be 2, 12, 20 respectively because our current values are adding in formula on each action. see line no 14 there we have enusred it.

const statics = document.querySelectorAll(".number");

statics.forEach((element) => {
  element.innerText = "0";

  function incrementF() {
    const dataCeil = element.getAttribute("data-ceil");
    // console.log(dataCeil)
    let currentNum = Number(element.innerText);  //we can also write as +element.innerText
    const incrementFormula = dataCeil / 20;
    currentNum = currentNum + incrementFormula;
    // console.log(currentNum);
    element.innerText = currentNum;
    if (currentNum < dataCeil) {
      setTimeout(incrementF, 40);
    }
  }
  incrementF();  // whenever we use setTimeout inside function we have to call function separately.
});

//short summary of code
//we can only call one function with forEach method, however we can nesting. first of all, we have set the values of numbers as zero, then we are moving further with nested function.


//important role of:
//data-ceil ; forEach ; setTimeout();