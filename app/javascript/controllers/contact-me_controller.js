import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "email", "message" ]

  submit(event) {
    debugger;
    event.preventDefault()

    const formData = new FormData()
    formData.append("name", this.nameTarget.value)
    formData.append("email", this.emailTarget.value)
    formData.append("message", this.messageTarget.value)

    fetch("/pages/contact_me", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      debugger;
      if (data.success) {
        debugger;
        console.log("Message sent successfully!")
        alert("Message sent successfully!")
      } else {
        console.log("There was an error sending your message.")
        alert("There was an error sending your message.")
      }
    })
    .catch(error => {
      console.error('Error:', error)
      alert("There was an error sending your message.")
    })
  }
}
