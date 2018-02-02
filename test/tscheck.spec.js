const {execSync} = require('child_process');
const {readdirSync} = require('fs');

describe('tscheck', function () {
  this.timeout(10000);
  const testcases = readdirSync('./test/fixtures')
    .filter(f => f.endsWith('.js'))
    .map(f => f.replace('.js', ''));

  testcases.forEach(f => {

    it(`${f}`, () => {
      execSync(`node ./tscheck.js  --verbose ./test/fixtures/${f}.js ./test/fixtures/${f}.d.ts`);
    });

  });

});

