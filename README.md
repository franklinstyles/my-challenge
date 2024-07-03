# PHASE 1 CODE CHALLENGE 1:

## STUDENT GRADE GENRATOR(Toy problem)

### Date:30-7-2024

### By:Franklin Ndegwa

Description;
It is a javascript driven program that runs scores and gives output of the grades after a scores has been input.The input should range from 0 to 100 only.Any other input above the range of 0 to 100 will automatically be null and will not function properly.The output should correspond to the grades:A>79,B-60 to 79,C- 59 to 49,D- 40 to 49,E-less 40.
This is what it looks like.

```

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

```

## SPEED DETECTOR.

### Date:30-7-2024

Description;
This is a javascript program that operates in a way that it can read the speed of a car according to the spped limit.the speed limit is set to seventy.When the speed is below the speed limit the program will read OK!.When the input of speed is above the speed limit it will give points.The points are given according to every 5m/s past the speed limit.When the points are past 12points it will read License Suspended ,becuase the license will have been suspended.
This is its appearance.

```

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
const myNumber = number();
console.log(myNumber)

```

## NET SALARY CALCULATOR.

### Date:30-7-2024

Description;
This is a javascript program that functions in a way that it calculates the net salary by calculating your NHIFdeductions ,Gross salary,Paye,NSSFdeductions and tax .
This is what it looks like.

```
const grossSalary = 0.0;
const netSalary=0.0;
const NHIFDeductions=0.0;
const NSSFDdeductions=0.0;
const KRA=0.0;
const payeRate=0.0;
const payeAmount=0.0;
const baseSalary=0.0;
const NSSFTier=0.0;

//calculate gross salary
grossSalary=baseSalary;

//calculate payeRate
function baseSalary(bs) {
if (bs<=24000){
payeRate=10
}else if(bs<=32333){
payeRate=25
}else if (bs<=50000){
payeRate=30
}else if (bs<=80000){
payeRate=32.5
}else {
payeRate=35
}
}

//calculate nhif deduction
function baseSalary(bs){
if(bs<=5999){
NHIFDeductions=150
}else if(bs<=7999){
NHIFDeductions=300
}else if(bs<=11999){
NHIFDeductions=400
}else if(bs<=14999){
NHIFDeductions=500
}else if(bs<=19999){
NHIFDeductions=600
}else if(bs<=24999){
NHIFDeductions=700
}else if(bs<=29999){
NHIFDeductions=800
}else if(bs<=34999){
NHIFDeductions=900
}else if(bs<=39999){
NHIFDeductions=1000
}else if(bs<=44999){
NHIFDeductions=1100
}else if(bs<=49999){
NHIFDeductions=1200
}else if (bs<=54999){
NHIFDeductions=1300
}else if (bs<=59999){
NHIFDeductions=1400
}else if(bs<=64999){
NHIFDeductions=1500
}else if(bs<=69999){
NHIFDeductions=1600
}else if(bs<=79999){
NHIFDeductions=1700
}else{
NHIFDeductions=1800
}

}

netSalary=basesalary-payeAmount-KRA-NSSFDeductions-NHIFDeductions;

console.log("Gross Salary:ksh"+grossSalary);
console.log("PAYE Rate:"+payeRate+"%");
console.log("PAYE Amount:Ksh"+payeAmount);
console.log("Fringe Benefit Tax(KRA)amount:Ksh"+KRA);
console.log("NSSFDdeductions:Ksh"+NSSFDdeductions);
console.log("NHIFDeduction:Ksh"+NHIFDeductions);
console.log("NET salary:Ksh"+netSalary);

```

### HOW TO ACCESS ALL PROGRAMS.

You git clone on your git hub using this, url:https://github.com/franklinstyles/my-challenge
