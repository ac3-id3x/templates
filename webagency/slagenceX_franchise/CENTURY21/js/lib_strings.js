function isValidEmail(str) {
	return (str.search(/^[-0-9_.a-z]+@([-0-9a-z][-0-9a-z]+\.)+[a-z][a-z]+$/i) != -1)
}

function trim(str) {
   return str.replace(/^\s*|\s*$/g,"");
}