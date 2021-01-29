for (const property in statistics) {
  if(property.charAt(0) === 'r' || property.charAt(0) === 'R') {
    console.log(statistics[property]);
  }
  else if(statistics[property] % 2 === 1) {
    console.log(statistics[property]);
  }
}