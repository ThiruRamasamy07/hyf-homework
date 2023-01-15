const seriesDurations = [ 
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 20,
    },
    {
        title: "The good doctor",
        days: 3,
        hours: 2,
        minutes: 32,
      },
      {
        title: "Vikings",
        days: 3,
        hours: 30,
        minutes: 16,
      },
      {
        title: "The 100",
        days: 2,
        hours: 25,
        minutes: 40,
      },
  ];
  let totaltimecal=[]; //to store the tot time of each series


  function logOutSeriesText() {
    let temparr = [];
    for (let i = 0; i < seriesDurations.length; i++) 
    {
      let Calsertime =Number((seriesDurations[i].days * 24) / (365 * 23) +
      (seriesDurations[i].hours / 24 / 365) * (100 / 23) +
      (seriesDurations[i].minutes / (60 * 24 * 365)) * (80/ 23)).toFixed(3);
      temparr.push(
        `${seriesDurations[i].title} took ${(Calsertime)} % of my life .`
      );
      totaltimecal.push(Number(Calsertime));
    }
    return temparr;
  }
    console.log(logOutSeriesText().join("\n"));
  //console.log(totaltimecal)
  
  //function to calculate the total time tottime()
  
  function tottime()
  {
    let sum=0;
    for (let i = 0; i < totaltimecal.length; i++) //summ of the array value 
    {
     sum = totaltimecal.reduce((a, b) => a + b, 0);
    }
    return sum;
  }
  let tt=tottime();
  console.log("In total that is"+ tt+"% of my life .");
  
