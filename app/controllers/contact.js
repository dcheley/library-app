import Ember from 'ember';

export default Ember.Controller.extend({

  message: '',

  isValid: Ember.computed.match('message', /^./),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    sendMessage() {
      alert(`Your message is being sent: ${this.get('message')}`);
      this.set('responseMessage', `Following message has been sent: ${this.get('message')}`);
      this.set('message', '');
    }
  }

});
