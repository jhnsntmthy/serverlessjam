/* eslint-env browser, tape */
import test from 'tape';
import index from '../../src/js/index';

test('expectation', (assert) => {
  assert.equal('value', 'value', 'the value did not meet expectations');
  assert.end();
});

test('expectation', (assert) => {
  assert.equal('value', 'value', 'the value did not meet expectations');
  assert.end();
});

test('expectation', (assert) => {
  assert.equal(index, 'index', 'the value did not meet expectations');
  assert.end();
});
