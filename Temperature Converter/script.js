function convert() {
	var celsius = document.getElementById("celsius").value;
	var fahrenheit = document.getElementById("fahrenheit").value;
	
	if (celsius !== "") {
		var fTemp = (celsius * 9/5) + 32;
		document.getElementById("fahrenheit").value = fTemp.toFixed(2);
	} else if (fahrenheit !== "") {
		var cTemp = (fahrenheit - 32) * 5/9;
		document.getElementById("celsius").value = cTemp.toFixed(2);
	} else {
		alert("Please enter a temperature");
		return false;
	}
	
	document.getElementById("result").innerHTML = "Conversion successful!";
	document.getElementById("result").style.display = "block";
}
