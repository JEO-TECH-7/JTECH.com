
const scriptURL = 'https://script.google.com/macros/s/AKfycbwnVwmX6f5ApjG1jmTQER5OZIj4-kzutckZdUQQpMxnirh4slF6tQ8AcyJbKcSfPZqS/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Thank you! your response has been recorded, but unfortunately this page is still under configuration."
    })
    .catch(error => console.error('Error!', error.message))
})


