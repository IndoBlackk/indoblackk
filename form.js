document.getElementById('tellMeForm').addEventListener('submit', async function(e) {
  e.preventDefault(); // Stop normal form submit
  
  const form = e.target;
  const status = document.getElementById('formStatus');
  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/yourFormID", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.textContent = "Message sent!";
      form.reset();
      setTimeout(() => {
        status.textContent = "";
        closePopup();
      }, 2000);
    } else {
      status.textContent = "Oops! Something went wrong.";
    }
  } catch (error) {
    status.textContent = "Error sending message.";
  }
});
