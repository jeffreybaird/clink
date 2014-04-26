var ChatController = RouteController.extend({
    template: 'chat',
    findOrCreateChat : function (chatName) {
      chat = Chat.findOne({name: this.params.name});
      if(chat){
        return chat
      }else{
        return Chat.insert({name: chatName}, function(error, result) {
          console.log(error,result);
        });
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

