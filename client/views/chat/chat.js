Template['chat'].helpers({
    chatroom: function(){
        return Session.get("name")
    },
    nickname: function(){
        return Session.get('nickname') || 'Anonymous'
    },
    prettyTime: function(datetime){
        if(typeof datetime === 'object'){
            var minutes = (datetime.getMinutes()<10 ?'0':'') + datetime.getMinutes()
            return "" + datetime.getHours() + ":" + minutes
            }
        else{
            return datetime
        }
    }
});

Template['chat'].events({
    // send message
    'keydown #message' : function (event) {
        if (event.which == 13) { // 13 is the enter key event
            Template.chat.extras.enterMessage();
        }
    },

    'click #send-btn' : function (event) {
        Template.chat.extras.enterMessage();
    },

    // change nickname
    'keydown #nickname' : function (event) {
        if (event.which == 13 ) {
            Template.chat.extras.updateNickname();
        }
    },
    'blur #nickname' : function (event) {
        Template.chat.extras.updateNickname();
    }
});

Template.chat.rendered = function () {
    // set the nickname, if not set
    var nickname = Session.get("nickname");
    if (typeof nickname == 'undefined') {
        $('#nickname').val('Anonymous');
        Session.set("nickname", nickname);
    }

    // resize
     $(window).resize(function(){
        var ourWindowHeight = $(window).height();
        $('.messages-container').css("height", ourWindowHeight);
    });
    $('#message').focus();
    $('.toggle-name-input').click(function(e) {
        e.preventDefault();
        $('.chat-options').toggleClass('hide');
    });
}

Template.chat.extras = {
    updateNickname: function() {
        var nickname = $('#nickname').val();
        Session.set("nickname", nickname);
        ReactiveStore.set("clink-nickname", nickname);
        $('.chat-options').addClass('hide');    // hide the options
    },
    enterMessage: function() {
        var nickname = Session.get("nickname");
        var message = $('#message').val();
        // Strip out HTML tags
        message = message.replace(/(<([^>]+)>)/ig,"");
        if (message != '') {
            Chat.update({_id: Session.get("id")}, {$push:{messages:{name: nickname, message: message, time: new Date}}});
            var ourLastChatRecord = $('.msg-container').last();
        }
        $('#message').val('');  // reset the message

    }
};