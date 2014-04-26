var ChatController = RouteController.extend({
    template: 'chat',
    findOrCreateChat : function (chatName, chat) {
      if(chat){
        console.log("I have a chat")
        console.log(chat._id)
        Session.set("name", chat._id)
        return chat
      }else{
        chat = Chat.insert({name: chatName, messages: [{message:"This is you initial test message"}]}, function(error, result) {
          console.log(error,result);
        });
        Session.set("name", chat._id)
        return chat
      }
    }
  });

Router.map(function () {
    this.route('chat', {
        path :  '/c/:name',
        data : function() { return this.findOrCreateChat(this.params.name, Chat.findOne({name: this.params.name})); },
        controller :  ChatController
    });
});


