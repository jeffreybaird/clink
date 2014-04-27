Template['home'].helpers({
  url: function(){
    var hex = Math.floor(Math.random() * 10000000).toString(16);

    hostname = window.location.hostname;
    if (hostname != 'clinkit.co' && hostname != 'clink.meteor.com') {
        hostname = hostname + ":3000";
    }

    return "http://" + hostname + "/c/" + hex;
  },
});

Template['home'].events({
    'click .expose-share-url': function(e) {
        $('.expose-share-url').fadeOut('fast', function() {
            $('.share-url-wrap').removeClass('hide').fadeIn('fast');
        });
        // $('.share-url-wrap').removeClass('hide').fadeIn('fast');
    },
    'click .btn-punch': function(e) {
        window.location.href = $('.share-this-url').val();
    }
});