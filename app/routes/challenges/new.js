import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(){
    // if(!session.isActivated){
      this.transitionTo('login');
    // }
  }
});
