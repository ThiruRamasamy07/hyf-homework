Housepricing.js
/* Formula for calculation
housePrice =
volumeInMeters * 2.5 *
1000 + gardenSizeInM2 *
300;
p=peter
j=julie*/

const Jwidth = 5;
const Jdepth = 11;
const Jheight = 8;
const pwidth = 8;
const pdepth = 10;
const pheight = 10;
let phouseVolume = pwidth* pdepth * pheight;
let JhouseVolume = Jwidth* Jdepth * Jheight;
const pHouseSize = 100;
const JHouseSize = 70;
let peter=false;7 /* true for peter false for julie*/
//Peter's estimation calculation
if(peter)
{
let phousePrice =(phouseVolume * 2.5 * 1000)+ (pHouseSize * 300);
let ppriceDifference =(2500000 - phousePrice)
if (phousePrice < 2500000) 
{
console.log( "Peter's actual house price is " +phousePrice + 
" but he is paying " + ppriceDifference + " more.");
}
else
{
console.log( "Peter's  actual house price is " +phousePrice +
" but he is paying " + ppriceDifference +" less.");
}
}
//Julie's estimation calculation
else
{
let jhousePrice =(JhouseVolume * 2.5 * 1000)+ (JHouseSize * 300);
let jpriceDifference =(jhousePrice-1000000)
if (jhousePrice < 1000000) 
{
console.log( "Julie's actual house price is " +jhousePrice + 
" but she is paying " + jpriceDifference + " more.");
}
else {
console.log( "Julie's actual house price is " +jhousePrice +
" but she is paying " + jpriceDifference +" less.");
}
}