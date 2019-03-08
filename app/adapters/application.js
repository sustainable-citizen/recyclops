import DS from 'ember-data';
import {inject} from '@ember/service';
import {computed} from '@ember/object';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  authorizer: 'authorizer:application',
  authManager: inject.service(),
  headers: computed('authManager.accessToken', function() {
    return {
      "Authorization": `Bearer ${this.get("authManager.accessToken")}`
    };
  })
});