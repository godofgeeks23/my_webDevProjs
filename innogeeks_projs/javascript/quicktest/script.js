// solution 1
function is_array(input) {
	return Array.isArray(input);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// solution 2
function array_Clone(input) {
	var new_array = [];
	for (let i = 0; i < input.length; i++)
		new_array.push(input[i]);
	return new_array;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


function first(input, n = 1) {
	var result = [];
	for (let i = 0; i < n; i++)
		result.push(input[i]);
	return result;
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

var myColor = ["Red", "Green", "White", "Black"];
var string1 = myColor[0];
var string2 = myColor[0];
for (let i = 1; i < myColor.length; i++) {
	string1 += "," + myColor[i];
	string2 += "+" + myColor[i];
}
console.log(string1);
console.log(string2);

function get_max(array) {
	var tempArr = {};
	var maxEl = array[0], maxCount = 1;
	for (var i = 0; i < array.length; i++) {
		var el = array[i];
		if (tempArr[el] == null)
			tempArr[el] = 1;
		else
			tempArr[el]++;
		if (tempArr[el] > maxCount) {
			maxEl = el;
			maxCount = tempArr[el];
		}
	}
	console.log(maxEl + " (" + maxCount + ") times");
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
get_max(arr1);
