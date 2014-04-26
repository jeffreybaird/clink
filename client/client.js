Template.messages.messages = function(){
  return Messages.find({channel: "fakechannel"},{ sort: {time: 1}});
}

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      var name = 'Anonymous';
      var message = document.getElementById('message');

      if (message.value != '') {
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now(),
          channel: "fakechannel",
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
}