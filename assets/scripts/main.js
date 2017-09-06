function signUpUser(sender){

	console.log("Hello!");

	var firstname = $(sender).find('#mce-FNAME').val(),
		lastname = $(sender).find('#mce-LNAME').val(),
		email = $(sender).find('#mce-EMAIL').val();

	var data = {
		firstname: firstname,
		lastname: lastname,
		email: email
	}

	$.post({
		data: data,
		success: function(){
			console.log("Succeeded!");
		},
		error: function(){
			console.log("Failed!");
		},
		complete: function(){
			console.log("Completed!");
		}
	});
}