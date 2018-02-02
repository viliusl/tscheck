const {execSync} = require('child_process');

describe('tscheck', function() {
  this.timeout(10000);

  it('should run a single test-case', () => {
      execSync('node ./tscheck.js  --verbose ./test/fixtures/apply-on-callsig.js ./test/fixtures/apply-on-callsig.d.ts');
  });

});