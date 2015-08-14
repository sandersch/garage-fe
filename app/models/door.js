import App from '../app';
import DS from 'ember-data';

export default App.Door = DS.Model.extend({
  status: DS.attr('string'),

  move: function() {
    console.log('moving door');
    console.log(this);
    console.log(this.get('path'));
    var path = 'doors/%@'.fmt(this.get('id'));
    console.log("path = " + path);
    $.ajax(path, { method: 'PUT', data: "{\"position\": \"open\"}", dataType: 'json', contentType:"application/json; charset=utf-8" }).then(function(resp) {
      console.log('door should be moving now');
      console.log(resp);
    });
  }
});
