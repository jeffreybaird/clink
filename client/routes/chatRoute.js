var ChatController = RouteController.extend({
    template: 'chat',
    findOrCreateChat : function (chatName) {
      // subscribe to the given chat
      Meteor.subscribe('chat', chatName, function(){
        // Once the data has loaded, set the session as true to indicate that the data have been loaded
        Session.set('chats_loaded', true);
      });

      if (Session.get('chats_loaded')) {
        chat = Chat.findOne({name: chatName});
        if(typeof chat == "undefined"){
          chat = Chat.insert({name: chatName, messages: [{message:"This is you initial test message"}]}, function(error, result) {
              // handle error if needed
          });
        }
        Session.set("id", chat._id);
        return chat;
      }
    }
  });

Router.map(function () {
    this.route('chat', {
        path :  '/c/:name',
        data : function() { return this.findOrCreateChat(this.params.name); },
        controller :  ChatController
    });
});
