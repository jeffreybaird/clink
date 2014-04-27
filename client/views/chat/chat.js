Template['chat'].helpers({
    chatroom: function(){
        return Session.get("name")
    },
    nickname: function(){
        return Session.get('nickname');
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
        // is set on startup; we set it here if the startup routine hasn't run yet
        $('#nickname').val('Anonymous');
    }

    $('#message').focus();
    $('.toggle-name-input').click(function(e) {
        e.preventDefault();
        $('.chat-options').toggleClass('hide');
    });

    // disable auto-scrolling if they scroll up
    $(window).scroll(function(){ 
        
        var height = $(window).scrollTop();
        var docHeight = $(document).height();

//         console.log("H" + height + " DH:" +  docHeight + " WH:" + winHeight);
        if (docHeight - height > 900) {
            window.enableAutoscroll = false; 
        }

        if (docHeight - height < 600) {
            window.enableAutoscroll = true;
        }

    });

    setInterval(function(){
        if (window.enableAutoscroll) {
            $("html, body").animate({ scrollTop: $(document).height()-$(window).height() })
        }
    }, 1500);
}

Template.chat.extras = {
    updateNickname: function() {
        var nickname = $('#nickname').val();
        if (nickname != '') {
            Session.set("nickname", nickname);
            ReactiveStore.set("clink-nickname", nickname);
            $('.chat-options').addClass('hide');    // hide the options
        }
    },
    enterMessage: function() {
        var nickname = Session.get("nickname");
        var message = $('#message').val();
        // Strip out HTML tags
        message = message.replace(/(<([^>]+)>)/ig,"");
        if (message != '') {
            Chat.update({_id: Session.get("id")}, {$push:{messages:{name: nickname, message: message, time: new Date}}}, null, function() {
               $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
            });
            var ourLastChatRecord = $('.msg-container').last();
        }
        $('#message').val('');  // reset the message
    }
};