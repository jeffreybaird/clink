Channel = new Meteor.Collection2('Channel', { 'schema' : {} });

// Collection2 already does schema checking
// Add custom permission rules if needed
Channel.allow({
    insert : function () {
        return true;
    },
    update : function () {
        return true;
    },
    remove : function () {
        return true;
    }
});

