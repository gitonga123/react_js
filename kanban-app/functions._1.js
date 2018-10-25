// Default Parameter Values in ECMAScript 6
function makeRequest(url, timeout = 2000, callback = function (){}) {
  let url_1 = url || 'wwww.google.com';
  console.log(typeof url_1);
  console.log(typeof callback);
  console.log(typeof timeout)
}

makeRequest();