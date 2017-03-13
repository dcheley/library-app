import Ember from 'ember';

export default Ember.Controller.extend({

  libraries: Ember.computed.alias('model.libraries'),
  books: Ember.computed.alias('model.books'),
  authors: Ember.computed.alias('model.authors'),

});
