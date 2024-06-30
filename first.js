function number(n) {
    if (n < 40) {
        console.log('you grade:E');
    }else if (n<=49) {
        console.log ('you grade:D');
    }else if (n<=59) {
        console.log ('you grade:C');
    }else if (n<=78) {
        console.log ('you grade:B');
    }else if (n>=79) {
        console.log ('you grade:A')
    }
  return 'You Entered:' +n; 
}
const myNumber = number(50);
console.log(myNumber)
