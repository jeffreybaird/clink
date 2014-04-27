Template['chat'].helpers({
  chatroom: function(){
    return Session.get("name")
  },
  nickname: function(){
    return Session.get('nickname') || 'Anonymous'
  }
});


Template['chat'].events({
  'keydown #message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      nickField = document.getElementById('nickname')
      if (nickField.value != '') {
        Session.set('nickname', nickField.value)
      } else {
        nickField.value = 'Anonymous'
      }
      var name = Session.get('nickname') || document.getElementById('nickname').value ;
      var message = document.getElementById('message');
      if (message.value != '') {
        Chat.update({_id: Session.get("id")}, {$push:{messages:{name: name, message: message.value}}});
        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  },
  'keydown #nickname' : function (event) {
    if (event.which == 13 ) {
      Session.set("nickname", document.getElementById('nickname').value);
    }
  }
});

Template.chat.rendered = function () {

}

