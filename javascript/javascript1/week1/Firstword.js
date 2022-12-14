Dogoffuture.js
const dogYearFuture = 2027;
const dogYearOfBirth = 2017;
let HumanYear = dogYearFuture - dogYearOfBirth;
let dogYear = HumanYear * 7;
let shouldShowResultInDogYears = true;
if(shouldShowResultInDogYears) 
{
console.log("Your dog will be "+ dogYear + " dog years old in "+ dogYearFuture + ".");
} 
else 
{
console.log("Your dog will be "+ HumanYear + " dog years old in "
+ dogYearFuture + ".");
}