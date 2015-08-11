import App from '../app';
import DS from 'ember-data';

App.DoorAdapter = DS.RESTAdapter.extend({
  host: 'http://garage'
});

export default App.DoorAdapter;
