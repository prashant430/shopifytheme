// assets/custom-script.js

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("submitCustomerInfo");

  if (button) {
    button.addEventListener("click", function() {
      const data = {
        customer: {
          first_name: 'prashant',
          email: 'test13223@gmail.com',
          verified_email: true,
          tags: 'take-a-class'
        }
      };

      fetch("app/routes/customers.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit customer info');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        alert('Customer data submitted successfully');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit customer data');
      });
    });
  }
});
