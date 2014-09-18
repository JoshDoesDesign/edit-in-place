$(document).ready(function() {
	$('p').on('click', function() {
		var input = $('<textarea class="edit-input" /> ');
		var cancel = $('<button type="button">Cancel</button>');
		$('p').hide();
		$(this).after(input);
		$(this).after(cancel);
	});
	$('button').on('click', function() {
		// var revert = $('<p>Hover over this text to enable edit in place demo.</p>');
		$('.edit-input').hide();
		$('button').hide();
		// $(this).after(revert);
	});	
});