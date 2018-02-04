const {execSync} = require('child_process');
const {readdirSync} = require('fs');

describe('tscheck', function () {
  this.timeout(20000);
  const testcases = readdirSync('./test/fixtures')
    .filter(f => f.endsWith('.js'))
    .map(f => f.replace('.js', ''));

  testcases.forEach(f => {

    it(`${f}`, () => {
      const out = execSync(`node ./tscheck.js  --verbose ./test/fixtures/${f}.js ./test/fixtures/${f}.d.ts`);
      assertOk(out.toString());
    });
  });

  function assertOk(output) {
    const lines = output.split('\n').filter(s => s !== '');
    const lineCount = lines.length;
    const badLineCount = lines.filter(s => s.includes('bad')).length;
    if (lineCount !== badLineCount || lineCount === 0) {
      throw new Error(`failed. lineCount: ${lineCount}, badLineCount: ${badLineCount}, output: ${output}`);
    }
  }
});

