const commentFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const comment = document.querySelector('#comment-text').value.trim();
    if (comment) {
      console.log(comment)

      const post_id = window.location.href.slice(-1);
      console.log(post_id)
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment,post_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('click', commentFormHandler);
  