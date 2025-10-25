

function showname()
{
	let num1 = parseFloat(prompt("Enter first number"));
	let num2 = parseFloat(prompt("Enter second number"));
	let num3 = parseFloat(prompt("Enter third number"));


	var total = num1 + num2 + num3;

	document.getElementById("showname").innerHTML = total;
} 

