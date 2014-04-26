Meteor.publish('channel', function () {
    return Channel.find();
});

