// function to calculate net salary
const 
function calculateNetSalary(salary, benefits = 0){
    //  determine gross salary
     const grossSalary = () => salary + benefits
     
  // calculate  nssf
     const calcNssf = () => {
      if(grossSalary() < 2999){
       return  0
     }else {
       return 1080
   } 
    
   }
  
  //calculate nhif
  const calcNhif = () => {
      if (grossSalary() < 5999){
          return 150
      }else if(grossSalary() < 7999){
          return 300
      }else if(grossSalary() < 11999){
          return 400
      }else if(grossSalary() < 14999){
          return 500
      }else if(grossSalary() < 19999){
          return 600
      }else if(grossSalary() < 24999){
          return 750
      }else if(grossSalary() < 29999){
          return 850
      }else if(grossSalary() < 34999){
          return 900
      }else if(grossSalary() < 39999){
          return 950
      }else if(grossSalary() < 44999){
          return 1000
      }else if(grossSalary() < 49999){
          return 1100
      }else if(grossSalary() < 59999){
          return 1200
      }else if(grossSalary() < 69999){
          return 1300
      }else if(grossSalary() < 79999){
          return 1400
      }else if(grossSalary() < 89999){
          return 1500
      }else if(grossSalary() < 99999){
          return 1600
      }else{
          return 1700
      }
  }

   // calculate payee 
   const payee = () => {
    if (grossSalary() < 24000){
        return ((grossSalary() * 10)/100)
    }else if(grossSalary() <  32333){
       return ((grossSalary() * 25)/100)
    }else if(grossSalary() > 32334 ){
        return ((grossSalary() * 30)/100)
    } 
 return payee()
}

   // taxable income  = gross salary - nssf and nhif
    let taxableIncome = grossSalary() - (calcNssf() +calcNhif())
    // netsalary = taxable income - payee
    let netSalary = taxableIncome - payee()

    return netSalary
  }

  // pass your salary and benefits here
  console.log(calculateNetSalary())
