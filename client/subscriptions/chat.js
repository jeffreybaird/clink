Meteor.subscribe('chat', function(){
    //Set the reactive session as true to indicate that the data have been loaded
	Session.set('chats_loaded', true);
});