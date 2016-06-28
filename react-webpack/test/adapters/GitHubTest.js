/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

import GitHub from '../../src/adapters/GitHub.js';

describe('adapters/GitHub', () => {
  // const compare = (expected, actual) => {
  //   const expectedJSON = JSON.stringify(expected);
  //   const actualJSON = JSON.stringify(actual);
  //   const sign = expectedJSON < actualJSON ? -1 : expectedJSON === actualJSON ? 0 : 1;
  //   if (sign !== 0) {
  //     console.log(`Expected !== Actual. Expected: ${expectedJSON}. Actual: ${actualJSON}`);
  //   }
  //   return sign;
  // };

  it('should have `ConvertToHtml()`` function', () => {
    expect(GitHub.ConvertToHtml);
  });

  describe('adapters/GitHub.ConvertToHtml()', () => {
    it('should return all configurations required', () => {
      const actual = GitHub.ConvertToHtml();
      expect(JSON.stringify(actual)).to.equal('{"method":"POST","headers":{"map":{"content-type":["text/plain"]}}}');
    });
  });

});
