var phone = prompt("Please enter your phone number: " + 
	"\nDon't worry, we will not share your info", "xxx-xxx-xxxx" );
alert((phone.charAt(3) === "-") && phone.charAt(7) === "-");

var birthDate = prompt("Enter your date of birth:", "xx/xx/xx");
alert((birthDate.charAt(2) === "/") && birthDate.charAt(5) === "/");

var postalCode = prompt("Enter your postal code:", "xxxxx OR xxxxx-xxxx");
alert( (postalCode.length === 5) || (postalCode.charAt(5) === "-" && (postalCode.length === 10)) );

var state = prompt("Enter your state: ", "XX");
alert( state.length === 2 && (state === state.toUpperCase()) );

var married = prompt("Are you married?");
alert( married.toUpperCase() === 'YES' || married.toUpperCase() === 'NO' );