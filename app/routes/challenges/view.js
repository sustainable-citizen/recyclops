import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
  model(){   
    let token = this.get('session.data.authenticated.access_token');
    return $.ajax({
      headers: {
          'Authorization': 'bearer '+ token
      },
      url: "https://api.thesci.net/api/v1/challenges",
      contentType: "application/json",
      type: "GET"
    });
  }
});
