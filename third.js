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
