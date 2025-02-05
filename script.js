function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Basic validation example
    const loanAmount = document.getElementById('loanAmount').value;
    const monthlyIncome = document.getElementById('monthlyIncome').value;
  
    if (loanAmount <= 0 || monthlyIncome <= 0) {
      alert('Loan Amount and Monthly Income must be greater than 0.');
      return;
    }
  
    // If all validations pass, submit the form
    alert('Form submitted successfully!');
    // Uncomment the line below to actually submit the form
    // document.getElementById('loanForm').submit();
  }