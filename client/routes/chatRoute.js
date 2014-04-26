var ChatController = RouteController.extend({
    template: 'chat'
});

Router.map(function () {
    this.route('chat', {
        path :  '/c',
        controller :  ChatController
    });
});

