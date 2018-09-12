/*input validation external javascript file*/
function validateForm() {
	/*addinng input labels from buy form*/
	var fname = document.forms["contactf"]["fname"].value;
	var lname = document.forms["contactf"]["lname"].value;
	var gender = document.forms["contactf"]["gender"].value;
	var email = document.forms["contactf"]["email"].value;
	var address = document.forms["contactf"]["address"].value;
	var phone = document.forms["contactf"]["phone"].value;
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
	/*if and else condition to check empty input text, wrong data type and error is displayed when wrong value is assigned*/
	else if(address==""){
		alert("Sorry, don't leave address field empty!");
	}
	else if(address==parseInt(address)){
		alert("Please, enter valid address!");
	}
	/*if and else condition to check empty input text, wrong data type and error is displayed when wrong value is assigned*/
	else if(phone==""){
		alert("Sorry, don't leave phone number field empty!");
	}
	else if(phone!=parseInt(phone)){
		alert("Please, enter valid contact number!");
	}
	else{
		/*alert window is opened with message to the user*/
		alert(fname+", your order has been sucessfully received.");
		alert("Your order will be deliver within next 3 working days \nThank you for shopping with us. We will get back you soon");
		window.close(); /*close window after message is displayed*/
	}
}
