// let farmerName = "wandera henry";
//  function greetFarmer(farmerName){
//   console.log("hello " + farmerName + " welcome to youngfor chicks")
  
//  }
 //parameters and arguments
 function calculateTotalcost(price, quantity){
  return price*quantity;

 }
 calculateTotalcost(1650, 2);
 console.log(calculateTotalcost(1650, 2))
 function getApprovalstatus(requestedChicks){
  if(requestedChicks <=500){
    return "Approved";
  }
  else {
    return "rejected";

  }
 }

 //turning a functioninto an arrow function.
 let greetfarmer = (farmer)  => console.log(`hello ${farmer} welcome to young for chicks` )
 //why are functions called first class citizens 
 //they can be passed as an argument
 //they canbe returned from another function
 //they can be assigned to a variable

 function ProcessMoney(callback){
  callback();
 }
 ProcessMoney(function(){
  console.log("colleagues the money is coming")
 })

 
 