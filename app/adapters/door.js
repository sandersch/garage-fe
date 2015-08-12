import App from '../app';
import DS from 'ember-data';

export default App.DoorAdapter = DS.RESTAdapter.extend({
  host: 'http://garage'
});
