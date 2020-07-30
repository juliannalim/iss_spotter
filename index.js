// index.js
const { nextISSTimesForMyLocation } = require('./newiss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });


// fetchCoordsByIP('198.84.178.3', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', coords);
// });


// coords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(coords, (error, location) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', location);
// });

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log('TT')
    // return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});