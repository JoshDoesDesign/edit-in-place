$(document).ready(function() {
	$('p').on('click', function() {
		var input = $('<textarea class="edit-input" /> ');
		var cancel = $('<button type="button">Cancel</button>');
		$('p').hide();
		$(this).after(input);
		$(this).after(cancel);

		$('button').on('click', function() {
			$('button').hide();
			$('p').show();
			input.hide();
			// $(this).after(revert);
		});	
	});
});