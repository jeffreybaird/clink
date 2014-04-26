Template['chat'].helpers({
  chatroom: function(){
    return Session.get("name")
  }
});


Template['chat'].events({
  'keydown #message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      var name = 'Anonymous';
      var message = document.getElementById('message');
      if (message.value != '') {
        console.log(chat.id)
        Chat.update({_id: chat._id}, {$push:{messages:{message: message.value}}});
        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
});

Template.chat.rendered = function () {

}

