// We only want to get a specific chat, not all chats, so we pass a chat name.
Meteor.publish('chat', function (chatName) {
    return Chat.find({name: chatName});
});