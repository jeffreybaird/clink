Template['chat'].helpers({
  chatroom: function(){
    return Session.get("name");
  }
});


Template['chat'].events({
  'keydown #message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      var name = 'Anonymous';
      var message = document.getElementById('message');
      if (message.value !== '') {
        Chat.update({_id: Session.get("name")}, {$push:{messages:{message: message.value}}});
        document.getElementById('message').value = '';
        message.value = '';
      }
      var ourLastChatRecord = $('.msg-container').last();
      $('.messages-container').animate({scrollTop: $('.msg-container').last().offset().top});
      // ourLastChatRecord.scrollTo(ourRecordPostion);
      console.log($('.msg-container').last());
      console.log($('.msg-container').length);
    }
  }
});

Template.chat.rendered = function () {

};