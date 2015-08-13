import App from '../app';
import Ember from 'ember';

export default App.DoorsController = Ember.Controller.extend({
  init: function() {
    this._super();
    this.poll();
  },

  poll: function() {
    Ember.run.later(this, function() {
      this.get('model').store.findAll('door');
      this.poll();
    }, 5000);
  }
});
