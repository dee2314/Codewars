/**
 * Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
 */


//SOLUTION POR LA PROBLEMA PARA HOY
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {

    if (enteredCode !== correctCode) {
      return false;
    }
  
    let current = new Date(currentDate);
    let expiration = new Date(expirationDate);
  
  
    if (current > expiration) {
      return false;
    }
  
    return true;
  }