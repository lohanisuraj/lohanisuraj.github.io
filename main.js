var distance = 0.0

function distancecal(lat1,lon1,lat2,lon2) {
    var R = 6371;//radius of 
var latDistance = toRad(lat2-lat1);
var lonDistance = toRad(lon2-lon1);

var a = Math.sin(latDistance / 2) * Math.sin(latDistance /2) +Math.cos(toRad(lat1)) *
Math.cos(toRad(lat2)) *Math.sin(lonDistance / 2) *
Math.sin(lonDistance / 2);

var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
distance = R * c;
return distance;
}
function toRad(value) {
return value * Math.PI / 180;
}

console.log(distancecal(27.746619,85.3217091,27.7526041,85.325087))//sayabung resturant - greenchilly resturant 
console.log(distancecal(27.746619,85.3217091,27.7589231,85.3274379))//tokha
console.log(distancecal(27.746619,85.3217091,27.6996385,85.2949009)) //kalimati
console.log(distancecal(27.746619,85.3217091,28.2299535,83.8165301)) //pokhara 
console.log(distancecal(27.746619,85.3217091,28.5275198,77.0688969))//new delhi
console.log(distancecal(27.746619,85.3217091,51.096745,5.9659499)) //europe
console.log(distancecal(27.746619,85.3217091,38.89378,-77.1546629))//usa 
console.log(distancecal(27.7486022,85.324788,-33.8564,150.9891))//roshni



