function ClothesToWear(temperature)
{
  if (temperature <5 && temperature<=10)
  {
    return ('Winter Wear')
  } 
  else if(temperature >10 && temperature<=15)
  {
    return ('Thermal Wears')
  } else if (temperature >15 && temperature<=24)
  {
    return ('Normal Wears')
  } else 
  {
    return ('Summer Wear')
  }
}
let Wear = ClothesToWear(-5);
console.log(Wear)