import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Controller.extend(UnauthenticatedRouteMixin,{
  session: service(),
  routeIfAlreadyAuthenticated : 'dashboard',
  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason);
      });
    }
  }
});
