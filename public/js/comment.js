const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const comment = document.querySelector('#comment-text').value.trim();
    const post_id = document.querySelector('#post-id').value.trim();
    const user_id = document.querySelector('#user-id').value.trim();
  
    if (comment) {
      // Send the e-mail and password to the server
      // console.log(email);
      // console.log(password);

      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('click', loginFormHandler);
  