import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | challenges/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:challenges/new');
    assert.ok(route);
  });
});
