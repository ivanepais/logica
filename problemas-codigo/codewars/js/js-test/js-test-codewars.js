// Kata 1

const playBonjo = strName => 
strName[0] === "r" || strName[0] === "R"
? strName + " plays banjo" 
: strName + " does not play banjo"; 


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
    })
  })
 
 
 
// Kata 4

const toArr = numb => 
numb.toString().split("").map(e => Number(e)).reverse();

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    assert.deepEqual(digitize(0),[0]);
    assert.deepEqual(digitize(23582357),[7,5,3,2,8,5,3,2]);
    assert.deepEqual(digitize(984764738),[8,3,7,4,6,7,4,8,9]);
    assert.deepEqual(digitize(45762893920),[0,2,9,3,9,8,2,6,7,5,4]);
    assert.deepEqual(digitize(548702838394),[4,9,3,8,3,8,2,0,7,8,4,5]);
  })
})

describe('Random tests', () => {
  let i, x, y;
  
  it('Testing for 37 random tests', () => {
    for (x = i = 1; i <= 37; x = ++i) {
      y = 10 + Math.ceil((9 * Math.pow(1.7, x) - 10) * Math.random());
      let ans = y.toString().split('').reverse().map(Number)
      assert.deepEqual(digitize(y), ans, `Testing for n = ${y}`);
    };
  })
});



// Kata 5



