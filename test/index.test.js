import test from 'tape';

test('expectation', (assert) => {
  assert.equal('value', 'expectation', 'the value did not meet expectations');
  assert.end();
});
