$( document ).ready(function() {
	
	var today = new Date();
	var currentTime = today.getTime();
	var week = 604800000;
	var expirationTime = week + closedTime;	
	var closedTime = parseInt(localStorage.getItem("timeClosed"));
	
	if (!localStorage["timeClosed"] || currentTime > expirationTime) {
		
		$(window).scroll(function() {
		var y = $(this).scrollTop();
		
		if (y > 300) {
			$('.subscribe-form-bar').slideDown(200);
		
		} else {
			$('.subscribe-form-bar').slideUp(200);
		}
			$('.subscribe-close').click(function() {
				//set current time
				localStorage.setItem("timeClosed", currentTime);
				var closedTime = parseInt(localStorage.getItem("timeClosed"));

				$('.subscribe-form-bar').slideUp(200);
				$(window).off('scroll')
			});
		});
	};
});
