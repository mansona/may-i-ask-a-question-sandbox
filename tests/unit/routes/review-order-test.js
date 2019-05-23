import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | review-order', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:review-order');
    assert.ok(route);
  });
});
