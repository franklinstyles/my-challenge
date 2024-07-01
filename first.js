function number(n) {
    if (n < 0) {
      console.log ('you have:invalid'); 
    }
    else if (n < 40) {
        console.log('you grade:E');
    }else if (n<=49) {
        console.log ('you grade:D');
    }else if (n<=59) {
        console.log ('you grade:C');
    }else if (n<=78) {
        console.log ('you grade:B');
    }else if (n>=79 && n <=100) {
        console.log ('you grade:A')
    }else {
        console.log ('you have:invalid')
    }
  return 'You Entered:' +n; 
}
const myNumber = number();
console.log(myNumber)
