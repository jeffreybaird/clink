var ChatController = RouteController.extend({
    template: 'chat'
});

Router.map(function () {
    this.route('chat', {
        path :  '/c/:_chat_room',
        data: function() { return Chat.insert({name: this.params_chat_room}); },
        controller :  ChatController
    });
});

