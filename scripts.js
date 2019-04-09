function submitForm() {
    // Get the first form with the name
    // Usually the form name is not repeated
    // but duplicate names are possible in HTML
    // Therefore to work around the issue, enforce the correct index
    let frm = document.getElementById('MCForm');
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    console.log("form submitted")
    document.getElementsByClassName("confirmation")[0].style.display="inherit"
    return true; // Prevent page refresh
 }