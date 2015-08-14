import App from '../app';
import DS from 'ember-data';

export default App.Door = DS.Model.extend({
  status: DS.attr('string'),

  move: function() {
    console.log('moving door');
    this.set('status', 'open');
    this.save();
    //this.put({ 
      //data: {"position": "open"},
    //}).then(function(resp) {
      //console.log('door should be moving now');
      //console.log(resp);
    //});
  },

  _ajax: function(method, options) {
    var type    = this.get('constructor');
    var adapter = this.get('store').adapterFor(type);
    var fullUrl = '%@/%@'.fmt(adapter.buildURL(type.typeKey), this.get('id'));

    return adapter.ajax(fullUrl, method, options);
  },

  put: function(options) {
    return this._ajax('PUT', options);
  }
});
