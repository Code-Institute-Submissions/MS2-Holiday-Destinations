//for booking emailjs
function sendEmail(contact) {
    emailjs.send('gmail', 'ms2', {
        "fname": contact.fname.value, 
        "lname": contact.lname.value, 
        "npeople": contact.npeople.value,
        "to_email": contact.email.value,
        "from_date": contact.fromDate.value,
        "destination": contact.destinationId.value,
        "to_date": contact.toDate.value,
        "project_request": contact.projectRequest.value
    })
    .then(function(response) {$("#sentModal").modal()
    console.log('SUCCESS!', response.status, response.text);
    }, function(error) {$("#failedModal").modal()
    console.log('FAILED...', error);
    });
    return false;
}

//reloads page when clicking on ok in modal popup after reserve button in booking and send in inquiry
function reloadPg() {
    location.reload();
}

//for inquiry emailjs
function sendInquiry(contact) {
    emailjs.send('gmail', 'feedbackMs2', {
        "inqFname": contact.inqFname.value, 
        "inqLname": contact.inqLname.value, 
        "to_email": contact.inqEmail.value,
        "inq_project_request": contact.inqProjectRequest.value
    })
    .then(function(response) {$("#sentModal").modal()
    console.log('SUCCESS!', response.status, response.text);
    }, function(error) {$("#failedModal").modal()
    console.log('FAILED...', error);
    });
    return false;
}

//hides inquiry form when submitting
$('#inqForm').submit(function(e) {
    e.preventDefault();
    $('#inqModal').modal('hide');
});

//hides and shows the contact form when clicking on continue and/or reserve buttons respectively
$(document).ready(function() {
    $("#contactForm").submit(function() {
        $("#contactForm").hide(1500);
    });
    $("#show").click(function(){
        $("#contactForm").show();
  });
});


