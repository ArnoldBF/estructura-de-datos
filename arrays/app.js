let array = [1, 2, 'pato', true];

function showArray(array) {
	console.log('---------------');
	for (let i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
}

function showArray2(array) {
	console.log('---------------');
	for (let element of array) {
		console.log(array);
	}
}

// showArray(array);
showArray2(array);

array.push('perro');

showArray2(array);
