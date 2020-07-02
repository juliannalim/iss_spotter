/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  const request = require('request');

  request('https://api.ipify.org?format=json', function (error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body);
    callback(null, ip['ip'])
  })
};

const fetchCoordsByIP = function (callback, ip = "65.95.234.201") {
  const request = require('request');

  request('https://ipvigilante.com/' + ip, function (error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    // console.log(ip['data']);
    callback(null, JSON.parse(body)['data'])
  })
}

//module.exports = { fetchMyIP };
module.exports = { fetchCoordsByIP };