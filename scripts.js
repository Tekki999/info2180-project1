/* Newsletter form handling: validate email and show messages in the .message div */
document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('.newsletter form');
	if (!form) return;

	const emailInput = form.querySelector('#email');
	const messageDiv = document.querySelector('.newsletter .message') || document.querySelector('.message');

	// Basic email pattern (simple, reasonable validation)
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		if (!messageDiv) return;

		const email = emailInput ? emailInput.value.trim() : '';

		// reset message state
		messageDiv.textContent = '';
		messageDiv.classList.remove('error', 'success');

		if (!email || !emailPattern.test(email)) {
			messageDiv.textContent = 'Please enter a valid email address.';
			messageDiv.classList.add('error');
			if (emailInput) emailInput.focus();
			return;
		}

		// Success
		// Use textContent so the email is inserted safely; include backticks as requested
		messageDiv.textContent = `Thank you! Your email address \`${email}\` has been added to our mailing list!`;
		messageDiv.classList.add('success');

		// Optionally clear the form
		form.reset();
	});
});