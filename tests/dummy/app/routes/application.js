import Ember from 'ember';
import Push from 'pushjs';

export default Ember.Route.extend({
  actions: {
    createNotification() {
      Push.create('Hello World!');
      Ember.Logger.log('no of alerts', Push.count);
    }
  }
});