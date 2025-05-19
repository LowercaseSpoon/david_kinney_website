document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };
  
      const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  
      fetch('/pages/contact_me', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-CSRF-Token": csrfToken
        },
        credentials: "same-origin"
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Message sent successfully!');
          form.reset();
        } else {
          alert('Failed to send message. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      });
    });
  });