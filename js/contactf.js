/*input validation external javascript file*/
function validateForm() {
	/*addinng input labels from contact form*/
	var fname = document.forms["contactf"]["fname"].value;
	var lname = document.forms["contactf"]["lname"].value;
	var gender = document.forms["contactf"]["gender"].value;
	var address = document.forms["contactf"]["address"].value;
	var email = document.forms["contactf"]["email"].value;
	var message = document.forms["contactf"]["message"].value;
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
	else if(address==""){
		alert("Sorry, don't leave address field empty!");
	}
	else if(address==parseInt(address)){
		alert("Please, enter valid address!");
	}
	/*if and else condition to check empty input text, wrong data type and error is displayed when wrong value is assigned*/
	else if(email==""){
		alert("Sorry, don't leave email field empty!");
	}
	else if(email==parseInt(email)){
		alert("Please, enter valid email!");
	}
	/*if and else condition to check empty input text, wrong data type and error is displayed when wrong value is assigned*/
	else if(message==""){
		alert("Sorry, don't leave message field empty!");
	}
	else if(message==parseInt(message)){
		alert("Please, enter valid message!");
	}
	else{
		/*alert window is opened with message to the user*/
		alert(fname+", thank you for writing to us. We will get back you soon");
	}
}
