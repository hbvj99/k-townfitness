/*input validation external javascript file*/
function validateForm() {
	/*addinng input labels from subscribe form*/
	var fname = document.forms["contactf"]["fname"].value;
	var lname = document.forms["contactf"]["lname"].value;
	var gender = document.forms["contactf"]["gender"].value;
	var email = document.forms["contactf"]["email"].value;
	/*if and else condition to check empty input text, wrong data type and error is displayed when wrong value is assigned*/
	if (fname ==""){
		alert("Sorry, don't leave first name field empty!");
	}
	else if (fname == parseInt(fname)){
		alert("please, enter valid name!");
	}
	/*if and else condition to check empty input text, wrong data type and error is displayed when wrong value is assigned*/
	else if(lname==""){
		alert("Sorry, don't leave surname field empty!");
	}
	else if(lname == parseInt(lname)){
		alert("Please, enter valid surname!");
	}
	/*if and else condition to check empty input text, wrong data type and error is displayed when wrong value is assigned*/
	else if(email==""){
		alert("Sorry, don't leave email field empty!");
	}
	else if(email==parseInt(email)){
		alert("Please, enter valid email!");
	}
	else{
		/*alert window is opened with message to the user*/
		alert("Congratulations!\n"+fname+", you have been sucessfully subscribed.");
		alert("You will be notified whenever new product is added via email.");
		window.close(); /*close window after message is displayed*/
	}
}
