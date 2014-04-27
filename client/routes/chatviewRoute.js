var ChatviewController = RouteController.extend({
    template: 'chatview'
});

Router.map(function () {
    this.route('chatview', {
        path :  '/chatview',
        controller :  ChatviewController
    });
});

