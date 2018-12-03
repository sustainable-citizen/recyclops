import Ember from 'ember';
import Controller from '@ember/controller';


export default Controller.extend({
  inputError: new Boolean(false),
  inputMessage: "",
  actions: {
    addChallenge(){
      // Retrieve values entered into form
      let {chall_name,chall_start_date,chall_end_date,chall_description} = this.getProperties('chall_name','chall_start_date','chall_end_date','chall_description')
      // Check for invalid data.
      if(chall_name == undefined || chall_name == "" ||
         chall_start_date == undefined ||
         chall_end_date == undefined||
         chall_description == undefined || chall_description == ""){
            this.invalidChallengeEntry("Please define all fields and confirm the data before submission.");
            return;
      }
      this.set('inputError',false);
      // Format dates according to API spec.
      let is = new Date(chall_start_date);
      chall_start_date = convertToAPIDateString(is);
      let ie = new Date(chall_end_date);
      chall_end_date = convertToAPIDateString(ie);
      // POST to server.
      Ember.$.ajax({
        url: "http://ec2-13-58-184-130.us-east-2.compute.amazonaws.com:3000/api/v1/challenges",
        type: "POST",
        contentType:"application/json",
        data: JSON.stringify({
          "name" : chall_name,
          "description" : chall_description,
          "start_date" : chall_start_date,
          "end_date" : chall_end_date
        })
      }).then(function(resp){
        console.log(resp);
      }).catch(function(error){
        console.log(error);
      });
    }
  },
  invalidChallengeEntry(error){
    this.set('inputError',true);
    this.set('inputMessage',error);
  }
});

function convertToAPIDateString(is){
  let is_ob ={};
  is_ob.year = is.getFullYear();
  is_ob.month = is.getMonth() + 1;
  if(is_ob.month < 10) is_ob.month = "0" + is_ob.month;
  is_ob.date = is.getDate();
  if(is_ob.date < 10) is_ob.date = "0" + is_ob.date;
  is_ob.hours = is.getHours();
  if(is_ob.hours < 10) is_ob.hours = "0" + is_ob.hours;
  is_ob.minutes = is.getMinutes();
  if(is_ob.minutes < 10) is_ob.minutes = "0" + is_ob.minutes;
  is_ob.seconds = is.getSeconds();
  if(is_ob.seconds < 10) is_ob.seconds = "0" + is_ob.seconds;
  return (is_ob.year) + "-" + (is_ob.month) + "-" + (is_ob.date) + " " + (is_ob.hours) + ":" + (is_ob.minutes) + ":" + (is_ob.seconds);
}
