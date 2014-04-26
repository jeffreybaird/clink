var ChatController = RouteController.extend({
    template: 'chat',
    findOrCreateChat : function (chatName) {
      chat = Chat.findOne({name: this.params.name});
      if(chat){
        Session.set("name", chat.name)
        return chat
      }else{
        chat = Chat.insert({name: chatName, messages: [{message:"This is you initial test message"}]}, function(error, result) {
          console.log(error,result);
        });
        Session.set("name", chat.name)
        return chat
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

