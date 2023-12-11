 function calculateTax(income) {

    function taxRate(){
        if(income <= 50000) {
             return 0.1;   //10% tax for income <= 50000
        } else if(income <= 100000) {

            return 0.15;  //15% tax for income <= 100000
        } else {
            return 0.2; //20% tax for income >= 100000
        }
    }

    // calculate tax using the defined tax rate
    const tax = income * taxRate()

    return tax;
 }
// test the function with various incomes 
console.log(calculateTax(30000));
console.log(calculateTax(75000));
console.log(calculateTax(120000));