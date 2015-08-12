import App from '../app';
import Ember from 'ember';

App.DoorsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('door');
  }
});

export default App.DoorsRoute;
