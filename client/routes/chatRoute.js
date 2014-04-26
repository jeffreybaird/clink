var ChatController = RouteController.extend({
    template: 'chat',
   /* data : function () {
        return Chat.insert({name: "Ulysses"}, function(error, result) {
        	console.log(error,result);
  //The insert will fail, error will be set,
  //and result will be undefined or false because "copies" is required.
  //
  //The list of errors is available by calling Books.simpleSchema().namedContext().invalidKeys()
		});
    },*/
    createChat : function (chatName) {
        return Chat.insert({name: chatName}, function(error, result) {
        	console.log(error,result);
		});
    }
});

Router.map(function () {
    this.route('chat', {
        path : '/c/:_id',
        data : function() { return this.createChat(this.params._id); },
        controller :  ChatController
    });
});

