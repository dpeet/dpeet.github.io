// function submitForm(this) {
//     // Get the first form with the name
//     // Usually the form name is not repeated
//     // but duplicate names are possible in HTML
//     // Therefore to work around the issue, enforce the correct index
//     print(this)
//     let frm = document.getElementById('MCForm');
//     frm.submit(); // Submit the form
//     frm.reset();  // Reset all form data
//     console.log("form submitted")
//     document.getElementsByClassName("confirmation")[0].style.display="inherit"
//     return true; 
//  }

 function formSubmit(event) {
    var url = "//mc.us19.list-manage.com/signup-form/subscribe?u=5ce56594aab2cceb7276aa194&amp;id=0078aae1f0";
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.onload = function() { // request successful
    // we can use server response to our request now
      console.log(request.responseText);
    };
  
    request.onerror = function() {
      // request failed
    };
  
    request.send(new FormData(event.target)); // create FormData from form that triggered event
    event.preventDefault();
  }
  
  // and you can attach form submit event like this for example
  function attachFormSubmitEvent(formId){
    document.getElementById(formId).addEventListener("submit", formSubmit);
  }

  attachFormSubmitEvent("MCForm")