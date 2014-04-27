var HpController = RouteController.extend({
    template: 'hp'
});

Router.map(function () {
    this.route('hp', {
        path :  '/hp',
        controller :  HpController
    });
});

