import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    move: function() {
      console.log('move button pressed for ' + this.get('door.id'));
      console.log(this.get('door'));
      this.get('door').move();
    }
  },

  statusClass: function() {
    var status = this.get('door.status');
    if("open" === status) {
      return 'btn-danger';
    } else if("closed" === status) {
      return 'btn-success';
    } else {
      return 'btn-warning';
    }
  }.property('door.status')
});
