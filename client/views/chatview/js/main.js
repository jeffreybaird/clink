$('#chatview-messages').on('change', function(){
	$("#chatview-messages").animate({scrollTop: $('ul#chatview-messages li:last').offset().top - 30});
});