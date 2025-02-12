//validate the form calls checkdate and check email if all is correct it will be allowed to be submitted
function validateForm() {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm-email").value;
    const bookingDate = document.getElementById("booking-date").value;
    
    //checks email and confirms email
    if (!checkEmails(email, confirmEmail)) {
      alert("Emails do not match or are invalid.");
      return false; 
    }
  
    //checks booking date
    if (!checkDate(bookingDate)) {
      alert("The selected date cannot be in the past.");
      return false; 
    }
  
    return true; 
  }
  
  //checks if the email matches the aston email format and that both emails are the same
  function checkEmails(email, confirmEmail) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@aston\.ac\.uk$/; 
    if (!emailPattern.test(email)) {
      return false; 
    }
    
    if (email !== confirmEmail) {
      return false; 
    }
    
    return true; 
  }
  
  //checks if the selected date is not in the past
  function checkDate(bookingDate) {
    const today = new Date();
    const selectedDate = new Date(bookingDate);
    
    
    if (selectedDate < today) {
      return false; 
    }
  
    return true; 
  }