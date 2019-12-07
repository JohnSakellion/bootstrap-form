function validateForm() {
    if( document.bootstrapForm.fullname.value == "" ) {
        alert( "Please provide your name!" );
        document.bootstrapForm.fullname.focus() ;
        return false;
    };
    if( document.bootstrapForm.email.value == "" ) {
        alert( "Please provide your name!" );
        document.bootstrapForm.email.focus() ;
        return false;
    } 
    else {
        validateEmail();
    };
    if( document.bootstrapForm.phone.value == "" ) {
        alert( "Please provide your name!" );
        document.bootstrapForm.phone.focus() ;
        return false;
    };
    return true;
};

function validateEmail() {
    var emailID = document.bootstrapForm.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID")
        document.myForm.EMail.focus() ;
        return false;
    }
    return( true );
}