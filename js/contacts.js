window.onload = () => {
  const form = document.getElementById("contactForm");


  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const message = document.getElementById("message").value.trim();

    // obligatory task
    if (name.toLowerCase() === "ironhack") {
      showPopup("You cannot be Ironhack, because I am Ironhack.");
      return;
    }

    // obligatory fields validation
    if (!name || !email || !phoneNumber || !message) {
      showPopup("Please fill all fields");
      return;
    }

    // email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      showPopup("Invalid email format");
      return;
    }

    // phone number validation
    if (phoneNumber.length < 9) {
      showPopup("Phone number must have at least 9 digits");
      return;
    }

    localStorage.setItem("contactData", JSON.stringify({
      name,
      email,
      phoneNumber,
      message
    }));

    console.log("User Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phoneNumber);
    console.log("Message:", message);

    showPopup("Form submitted successfully 🚀");

    form.reset();
  });
};

function showPopup(message) {
  const popup = document.getElementById("customPopup");
  const popupText = document.getElementById("popupMessage");

  popupText.textContent = message;
  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("customPopup").classList.add("hidden");
}