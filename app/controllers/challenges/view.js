import $ from 'jquery';
import Controller from '@ember/controller';


export default Controller.extend({
  actions:{
    getChallenges(){
      let token = this.get('session.data.authenticated.access_token');
      console.log(token);
      $.ajax({
        headers: {
            'Authorization': 'bearer '+ token
        },
        url: "https://api.thesci.net/api/v1/challenges",
        contentType: "application/json",
        type: "GET"
      }).then(function(resp){
        console.log(resp);
      }).catch(function(error){
        console.log(error);
      });
    }
  }
});
