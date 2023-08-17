const newPostHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  location.replace('/newpost');

};

const postHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

 location.replace('/');
  // if (comment) {
  //   console.log(comment)

  //   const post_id = window.location.href.slice(-1);
  //   console.log(post_id)
  //   const response = await fetch('/api/posts', {
  //     method: 'POST',
  //     body: JSON.stringify({ comment,post_id }),
  //     headers: { 'Content-Type': 'application/json' },
  //   });

  //   if (response.ok) {
  //     location.replace('/');
  //   } else {
  //     alert(response.statusText);
  //   }
  // }
};

 
 
 document
    .querySelector('#newpost')
    .addEventListener('click', newPostHandler);
  
    document
    .querySelector('#posts')
    .addEventListener('click', postHandler);
  