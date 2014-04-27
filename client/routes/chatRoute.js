var ChatController = RouteController.extend({
        template: 'chat',
        findOrCreateChat : function (chatName) {
            // subscribe to the given chat
            Meteor.subscribe('chat', chatName, function(){
                // Once the data has loaded, set the session as true to indicate that the data have been loaded
                Session.set('chats_loaded', true);

            });

      if (Session.get('chats_loaded')) {
        var chat = Chat.findOne({name: chatName});

        if(typeof chat == "undefined"){
          chat = Chat.insert({name: chatName, messages: [{name:"The Clinkbot", message:"Welcome to the chatroom!"}]}, function(error, result) {
            console.log(error,result);
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
                data : function() { return this.findOrCreateChat(this.params.name.toLowerCase()); },
                controller :  ChatController
        });
});
