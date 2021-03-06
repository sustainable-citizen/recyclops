import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home',{ path: '/'});
  this.route('login');
  this.route('signup');

  this.route('dashboard');
  this.route('challenges', function() {
    this.route('new');
    this.route('view');
  });

  this.route('404', { path: '/*path' });

});

export default Router;
