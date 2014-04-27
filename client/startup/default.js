Meteor.startup(function () {
	Session.set('chats_loaded', false);

    // grab the nickname from local storage
    var nickname = ReactiveStore.get('clink-nickname');
    if(typeof nickname != "undefined") {
	    Session.set("nickname", nickname);
    }
});