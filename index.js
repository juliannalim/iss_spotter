// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP("65.95.234.201", (error, ip) => {

//   if (error) {
//     console.log("It didn't work!", error);
//     return;

//   }

//   console.log('It worked! Returned IP:', ip);

// });

const ex = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(ex, (error, location) => {

  if (error) {
    console.log("It didn't work!", error);
    return;

  }

  console.log('It worked! Returned flyover times:', location);

});

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   console.log(passTimes);
// });