import Ember from 'ember';

export default Ember.Controller.extend({
    aNumber: 50,
    value: 1,
    cookies: 10,
    normalValue: 100,
    value_speed: 50,

    calories: Ember.computed('cookies', function() {
      return this.get('cookies') * 50;
    })

});
