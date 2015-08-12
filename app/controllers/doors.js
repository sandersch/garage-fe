import App from '../app';
import Ember from 'ember';

App.DoorsController = Ember.Controller.extend({
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

export default App.DoorsController;
