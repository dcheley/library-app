import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('book');
    return Ember.RSVP.hash({
      books: this.store.findAll('book'),
      authors: this.store.findAll('author'),
      libraries: this.store.findAll('library')
    });
  },

  setupController(controller, model) {
    const books = model.books;
    const authors = model.authors;
    const libraries = model.libraries;

    this._super(controller, books);

    controller.set('authors');
    controller.set('libraries', libraries);
  },

  actions: {
    editBook(book) {
      book.set('isEditing', true);
    },

    cancelBookEdit(book) {
      book.set('isEditing', false);
      book.rollbackAttributes();
    },

    saveBook(book) {
      if (book.get('isNotValid')) {
        return;
      }

      book.set('isEditing', false);
      book.save();
    },

    
  }

});
