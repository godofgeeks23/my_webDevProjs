function calc_bmi()
{
    console.clear();
	var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);
	if(isNaN(height) || isNaN(weight))
	{
		document.getElementById("result").innerHTML = "Please enter valid details!";
		document.getElementById("result").style.color = "#ff3d00";
		document.getElementById("result_details").innerHTML = "Invalid Input!";
		document.getElementById("result_details").style.color = "#ff3d00";
	}
	else
	{
		var bmi = weight/((height*height)/10000).toFixed(3);
		document.getElementById("result").style.color = "#7f8082";
		document.getElementById("result").innerHTML = "BMI: "+bmi;
		if(bmi<18.5)
		{
			document.getElementById("result_details").innerHTML = "Underweight!";
			document.getElementById("result_details").style.color = "#ff3d00";
		}
		else if(bmi>=18.5 && bmi<=24.9)
		{
			document.getElementById("result_details").innerHTML = "Normal!";
			document.getElementById("result_details").style.color = "#43a047";
		}
		else
		{
			document.getElementById("result_details").innerHTML = "Overweight!";
			document.getElementById("result_details").style.color = "#ff3d00";
		}	
	}
}