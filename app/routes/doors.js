import App from '../app';

App.DoorsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('door');
  }
});

export default App.DoorsRoute;
