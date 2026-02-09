// Selecting elements correctly (Matching HTML IDs)
const nameInput = document.getElementById('nameinput');
const ageInput = document.getElementById('ageinput');
const emailInput = document.getElementById('emailinput');
const output = document.getElementById('output');
const button = document.getElementById('btnclick');

button.addEventListener('click', () => {
  // Visual feedback
  button.textContent = 'Submitted!';
  button.style.backgroundColor = '#2ecc71';

  let name = nameInput.value;
  let age = ageInput.value;
  let email = emailInput.value;

  // Validate Fields
  if (name !== "" && age !== "" && email !== "") {
    output.className = "success-msg"; // Apply green styling
    
    let message = `<h2>Submission Received!</h2>`;
    
    // Adult check
    if (age >= 18) {
      message += `<p>Welcome ${name}, you are an adult!</p>`;
    } else {
      message += `<p>Welcome ${name}, you are ${age} years old.</p>`;
    }

    message += `<p>Email: ${email}</p>`;
    output.innerHTML = message;
  } else {
    output.className = "error-msg"; // Apply red styling
    output.innerHTML = `<p>Error: Please fill in all fields before submitting.</p>`;
  }
});
