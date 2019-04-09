function submitForm(formContext) {
    // Get the first form with the name
    // Usually the form name is not repeated
    // but duplicate names are possible in HTML
    // Therefore to work around the issue, enforce the correct index
    console.log("submit")
    document.getElementsByClassName("confirmation")[0].style.display="inherit"
    return true; 
    console.log(formContext)
    // let frm = document.getElementById('MCForm');
    formContext.submit(); // Submit the form
    // formContext.reset();  // Reset all form data
    console.log("form submitted")
    return true; 
 }
