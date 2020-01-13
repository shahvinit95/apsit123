$(document).ready(function() {
   
    //Since salesforce.com is a different domain a traditional XHR submission cannot be used.
    //Therefore, an iframe is created and the submission is done there.  When the iframe loads
    //after the submission it destroys itself.
    var submitToSalesForce = function() {
    	var $iframe = $('<iframe/>', {
    		name: 'salesForceSubmitter',
    		id: 'salesForceSubmitter'
    	})
    		.css('display', 'none')
    		.appendTo('body')
    		.on('load', function(event) {
    			$iframe.remove();
    		});

    	var $newForm = $('<form>', {
    		action: $(this).attr('action'),
    		method: 'POST',
    		html: $(this).html()
    	});
    	$(this).find('input').each(function() {
    		$newForm.find('[name="' + $(this).attr('name') + '"]')
    			.val($(this).val());
    	});
    	$newForm.appendTo($iframe[0].contentDocument.body);
    	$newForm.submit();
    };
$('#contactForm').on('submit', function(event) {
    	event.preventDefault();
    	submitToSalesForce.apply(this);
    	$('.try-tutorial-wrap').fadeOut({
    			complete: function() {
    				$('#try-tutorial-form-thanks').fadeIn();
    			},
    			duration: 'slow'
    		});
	});
});