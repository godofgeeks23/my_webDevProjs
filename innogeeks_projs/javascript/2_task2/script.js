function lifeInWeeks(age)
{
	var left = 90 - age;
	var days = left*365;
	var weeks = left*52;
	var months = left*12;
	console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

console.clear();
lifeInWeeks(56);
