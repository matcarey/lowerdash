var assert = require('assert');
var lodash = require('../lodash.src.js');
var libs = {
  lodash: lodash,
  lowerdash: require('../build/Release/lowerdash')
};
var collection = ['a', 'b', 'd'];
var identicalCollection = ['a', 'b', 'd'];


function assertBehaviour(_) {
  assert.equal(_.include(), false);
  assert.equal(_.include(collection), false);
  assert.equal(_.include('not a collection', 'a'), true);
  assert.equal(_.include('just string', 'a'), false);

  assert.equal(_.include(collection, 'a'), true);
  assert.equal(_.include(collection, 'b'), true);
  assert.equal(_.include(collection, 'c'), false);
  assert.equal(_.include(collection, 'd'), true);
  assert.equal(_.include(collection, 'e'), false);

  assert.equal(_.include([collection], collection), true);
  assert.equal(_.include([collection], identicalCollection), false);
}

console.log('--------------');
lodash.each(libs, function (_, name) {
  console.log('behaviour testing', name, typeof _);
  assertBehaviour(_);
  console.log('passed');
  console.log('--------------');
});
lodash.each(libs, function (_, name) {
  console.log('perf testing', name, typeof _);
  var start = Date.now();
  var remaining = 599999;
  while(remaining--) {
    assertBehaviour(_);
  }

  console.log('took', (Date.now() - start)/1000, 'seconds');
  console.log('--------------');
});


