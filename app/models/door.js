import App from '../app';
import DS from 'ember-data';

App.Door = DS.Model.extend({
  status: DS.attr('string'),

  isOpen: function() {
    if(this.get('status') === 'open') {
      return true;
    } else {
      return false;
    }
  }.property('status')
});

export default App.Door;
