Chat = new Meteor.Collection2('chat', {
    schema: new SimpleSchema({
        name: {
            type: String,
            max: 200,
            optional: true
        },
        "messages.$.name": {
            type: String,
        },
        "messages.$.message": {
          type: String,
        },
        "messages.$.time":{
          type: Date,
          optional: true
        }
    })
});

// Collection2 already does schema checking
// Add custom permission rules if needed
Chat.allow({
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


