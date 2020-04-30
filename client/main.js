import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../lib/Services/TaskService.js';
import '../imports/ui/todo/todo-body.js';
import '../imports/api/todo/tasks.js';

import './main.html';

Template.sheet.events({

});

Template.body.helpers({
  notes() {
    return Notes.find({ }).fetch();
  }
});

Template.addNote.events({
  'submit .add-form': function() {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;
    Notes.insert({
      text,
      createdAt: new Date()
    });
    // Notes.update(myMessages[0]._id, { $set: { important: true } });
    target.text.value = '';
    return false;
  }
});
 
