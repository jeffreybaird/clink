Template['home'].helpers({
  url: function(){
    var hex = Math.floor(Math.random() * 1000000000).toString(16);
    return "http://clinkit.co/c/" + hex
  },
});

Template['home'].events({
    'click .expose-share-url': function(e) {
        $('.expose-share-url').fadeOut('fast', function() {
            $('.share-url-wrap').removeClass('hide').fadeIn('fast');
        });
        // $('.share-url-wrap').removeClass('hide').fadeIn('fast');
    }
});