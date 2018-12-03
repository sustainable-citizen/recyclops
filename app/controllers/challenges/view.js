import Ember from 'ember';

import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    getChallenges(){
      Ember.$.ajax({
        url: "http://ec2-13-58-184-130.us-east-2.compute.amazonaws.com:3000/api/v1/challenges",
        contentType: "application/json",
        type: "GET"
      }).then(function(resp){
        // Model the data and render it?
      }).catch(function(error){
        console.log(error);
      });
    }
  }
});
