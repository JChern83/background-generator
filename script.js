var years = [1932,1935, 1985, 2015];
var ages = [];
for (var i = 0; i < years.length; i++) {
	ages[i] = 2018 - years[i];
}
for (i=0; i < ages.length; i++) {
	if (ages[i] >= 18) {
		console.log('Person is' + " " + ages[i] + " " + 'years old, and is of full age.');
	} else  console.log('Person is' + " " + ages[i] + " " + 'years old, and is NOT of full age.');
}
