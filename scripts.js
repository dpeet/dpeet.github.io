function submitForm(formContext) {
    console.log("submit")
    document.getElementsByClassName("confirmation")[0].style.display="inherit"
    setTimeout(function(){window.location.reload();},3000)
    return true; 
 }

