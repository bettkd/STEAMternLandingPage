
$(document).ready(function(){
	$('#mc-signup-form').submit(function(e){
		e.preventDefault();

		let firstname = $(this).find('#mce-FNAME').val(),
			lastname = $(this).find('#mce-LNAME').val(),
			email = $(this).find('#mce-EMAIL').val();

		let req = {
			firstname: firstname,
			lastname: lastname,
			email: email
		};

		let url = 'http://d45908604ceebeb5150a.herokuapp.com/api/user/register';

		$.post( url, req, function(data, status) {
	        if(data.success) {
	        	swal("Thank you, " + data.success.displayName + "!", "You have been successfully registered!", "success");
	        	location.reload();
	        }
	        else {
	        	swal("Error", data.error.message , "error");
	        }
	    });
	});
});