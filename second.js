function number(n) {
   if (n<=70) {
    console.log ('you have:OK!');
   }else if (n<=75) {
    console.log ('you have:1 point');
   }else if (n<=80) {
    console.log ('you have:2 points');
   }else if (n<=85) {
    console.log ('you have:3 points');
   }else if (n<=90) {
    console.log ('you have:4 points');
   }else if (n<=95) {
    console.log ('you have:5 points');
   }else if (n<=100) {
    console.log ('you have:6 points');
   }else if (n<=105) {
    console.log ('you have:7 points');
   }else if (n<=110) {
    console.log ('you have:8 points');
   }else if (n<=115) {
    console.log ('you have:9 points');
   }else if (n<=120) {
    console.log ('you have:10 points');
   }else if (n<=125) {
    console.log ('you have:11 points');
   }else if (n<=130) {
    console.log ('you have:12 points');
   }else if(n>130) {
      console.log ('you have:License Suspended');
   }
   return 'You Entered:' +n
}
const myNumber = number(120);
console.log(myNumber)