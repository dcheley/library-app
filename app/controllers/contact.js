import Ember from 'ember';

export default Ember.Controller.extend({

  responseMessage: '',
  message: '',

  isValid: Ember.computed.match('message', /^./),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage() {
      const message = this.get('message');

      const newMessage = this.store.createRecord('contact', {
        message: message
      });

      newMessage.save().then((response) => {
        this.set('responseMessage', `Your message has been sent with the following id: ${response.get('id')}`);
        this.set('message', '');
      });
    }
  }

});
