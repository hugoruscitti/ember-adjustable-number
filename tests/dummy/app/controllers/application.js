import Ember from 'ember';

export default Ember.Controller.extend({
    value: 1,
    cookies: 10,
    normalValue: 100,

    calories: Ember.computed('cookies', function() {
      return this.get('cookies') * 50;
    })

});
