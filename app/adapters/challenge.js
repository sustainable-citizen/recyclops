import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import $ from 'jquery';

function convertToAPIDateString(is){
  let is_ob ={};
  is.setTime( is.getTime() + is.getTimezoneOffset()*60*1000 );
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

export default DS.JSONAPIAdapter.extend(DataAdapterMixin,{
  namespace: 'api/v1',
  primaryKey: 'id',
  findAll(store, type, sinceToken) {
    let query = { since: sinceToken };

    return new Promise(function(resolve, reject) {
      $.getJSON(`https://api.thesci.net/api/v1/challenges`, query).then(function(data) {
        data = data.filter(chall => chall.name != null);
        data.forEach(function(elem,index,object){
            elem.end_date = convertToAPIDateString(new Date(elem.end_date));
        });
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
