import Ember from 'ember';

export default Ember.Component.extend({
  statusClass: function() {
    status = this.get('door.status')
    if("open" == status) {
      return 'btn-danger';
    } else if("closed" == status) {
      return 'btn-success';
    } else {
      return 'btn-warning';
    }
  }.property('door.status')
});
