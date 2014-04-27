var ChatController = RouteController.extend({
    template: 'chat',
    findOrCreateChat : function (chatName) {
      if (Session.get('chats_loaded')) {
        chat = Chat.findOne({name: chatName});
        console.log('here' + chat);
        if(typeof chat == "undefined"){
          chat = Chat.insert({name: chatName, messages: [{name:"System", message:"This is you initial test message"}]}, function(error, result) {
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
        data : function() { return this.findOrCreateChat(this.params.name); },
        controller :  ChatController
    });
});

