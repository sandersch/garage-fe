import App from '../app';
import DS from 'ember-data';

export default App.Door = DS.Model.extend({
  status: DS.attr('string'),

  move: function() {
    this.set('status', this.get('inversePosition'));
    this.save();
  },

  inversePosition: function() {
    var status = this.get('status');
    if("open" === status) {
      return 'closed';
    } else if("closed" === status) {
      return 'open';
    } else {
      return undefined;
    }
  }.property('status')
});
