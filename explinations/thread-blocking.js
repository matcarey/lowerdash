var lastDate = Date.now();
var startingNumber = 999999500;
setInterval(function () {
  console.log(Date.now() - lastDate);
  lastDate = Date.now();
}, 100);

setTimeout(function () {
  var start = Date.now();
  var i = startingNumber;
  var out = '';
  while (i--) {
    out = '-';
  }
  console.log('blocking took:', Date.now() - start, 'milliseconds');
  setTimeout(friendlyBigLoop, 1000);
}, 1000);

function friendlyBigLoop() {
  var start = Date.now();
  var i = startingNumber;
  var out = '';

  function loop() {
    while (i--) {
      out = '-';
      if (i % 10000000 === 0) {
        setImmediate(loop);
        return;
      }
    }
    console.log('nonblocking took:', Date.now() - start, 'milliseconds');
    setTimeout(process.exit.bind(process), 1000);
  }

  loop();
}
