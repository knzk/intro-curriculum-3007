'use strict';
/**
* 17の倍数である場合 true を返す
* @param {number} age
*/

function isSeventeen(age){
  return age % 17 === 0;
 }

module.exports = {
  isSeventeen: isSeventeen
}
