import $ from 'jquery';
import Controller from '@ember/controller';

// $.ajaxSetup({
//   xhrFields:{
//     withCredentials:true
//   }
// });

export default Controller.extend({
  actions:{
    getChallenges(){
      $.ajax({
        url: "http://ec2-13-58-184-130.us-east-2.compute.amazonaws.com:3000/api/v1/challenges",
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
