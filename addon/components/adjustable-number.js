import Ember from 'ember';
import layout from '../templates/components/adjustable-number';

var {$} = Ember;

export default Ember.Component.extend({
  layout: layout,
  classNames: ['adjustable-number'],

  min: null,
  max: null,
  label: null,
  speed: null,

  didInsertElement: function() {
    let element = this.$();
    var initialX = 0;

    element.on('mousedown', (mouse_down_event) => {
      initialX = mouse_down_event.pageX;
      this.set('original_value', this.get('value'));
      this.disableSelection();
      this.saveAndChangeCursor(element);

      $('body').on('mousemove', (event) => {
        var speed = this.get('speed') || 9.0;

        if (speed > 10) {
          speed = 10;
        } else {
          if (speed < 1) {
            speed = 1;
          }
        }


        var mouse_dx = (event.pageX - initialX) / (101 - speed*10);


        this.set('value', this.changeValue(mouse_dx));
        //initialX = event.pageX;
      });


      $('body').on('mouseup', () => {
        this.disconnectEvents();
      });

      $('body').on('mouseleave', () => {
        this.disconnectEvents();
      });

    });

  },

  disconnectEvents: function() {
    $('body').unbind('mousemove');
    $('body').unbind('mouseup');

    this.enableSelection();
    this.restoreCursor();
  },

  disableSelection: function() {
    $('body').css('user-select', 'none');
    $('body').css('-moz-user-select', 'none');
    $('body').css('-webkit-user-select', 'none');
  },

  enableSelection: function() {
    $('body').css('user-select', 'text');
    $('body').css('-moz-user-select', 'text');
    $('body').css('-webkit-user-select', 'text');
  },

  restoreCursor: function() {
    $('body').css('cursor', this.get('originalCursor'));
  },

  saveAndChangeCursor: function(element) {
    this.set('originalCursor', $('body').css('cursor'));
    $('body').css('cursor', element.css('cursor'));
  },

  changeValue: function(mouse_dx) {
    let newValue = parseInt(parseInt(this.get('original_value'), 10) + mouse_dx, 10);
    let min = this.get('min');
    let max = this.get('max');

    if (min !== null) {
      if (newValue < min) {
        newValue = min;
      }
    }

    if (max) {
      if (newValue > max) {
        newValue = max;
      }
    }

    return newValue;
  }

});
