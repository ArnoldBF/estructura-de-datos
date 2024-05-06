const nombre = ['gato', 'perro', 'loro', 'conecto', 'perro', 'mono', 'leon', 'cangrejo', 'gallo'];

// Modo estructurado

function searchFirstLetter(collection, letter) {
	const newCollection = [];

	for (let word of collection) {
		if (word[0].toUpperCase() === letter.toUpperCase()) {
			newCollection.push(word);
		}
	}

	return newCollection;
}

console.log(searchFirstLetter(nombre, 'g'));

// Programacion funcional

function searchFirstLeter2(collection, letter) {
	const newCollection = collection.filter((word) => word[0].toUpperCase() === letter.toUpperCase());
	return newCollection;
}

const array3 = [1, 2, 3, 5];

function reducirArray(collection) {
	let acumulador = 0;

	for (let i = 0; i < collection.length; i++) {
		acumulador += collection[i];
	}
	return acumulador;
}

// Forma estructurada

function sumNumber(collection, num) {
	const newCollection = [];

	for (let item of collection) {
		newCollection.push(item + num);
	}

	return newCollection;
}

// Usando funciones existantes

function sumNumber2(collection) {
	return collection.reduce((sum, item) => sum + item, 0);
}

const arrayNuevo = array3.map((element) => element + 2);

const newCollection = array3.map((element) => element + 10);

console.log(sumNumber(array3, 10));
console.log(sumNumber2(array3));

console.log(reducirArray(array3));

// modo estructurado

function removeName(collection, nombre) {
	const newCollection = [];

	for (const word of collection) {
		if (word !== nombre) {
			newCollection.push(word);
		}
	}
	return newCollection;
}

function removeName2(collection, nombre) {
	return collection.filter((item) => item !== nombre);
}

console.log(removeName(nombre, 'gato'));
console.log(removeName2(nombre, 'gato'));
