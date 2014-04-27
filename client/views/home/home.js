Template['home'].helpers({
});

Template['home'].events({
    'click .expose-share-url': function(e) {
        $('.expose-share-url').fadeOut('fast', function() {
            $('.share-url-wrap').removeClass('hide').fadeIn('fast');
        });
        // $('.share-url-wrap').removeClass('hide').fadeIn('fast');
    }
});