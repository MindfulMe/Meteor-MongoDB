import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Tasks = new Mongo.Collection('tasks');

	Template.tasks.helpers({
		tasks: function(){
			return Tasks.find({}, {sort: {createdAt: -1}});
		}
	});





