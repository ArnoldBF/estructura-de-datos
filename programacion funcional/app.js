function calcularTotal(operacion, num1, num2) {
	console.log('progranado la programacion funciona');
	return operacion(num1, num2);
}

console.log(calcularTotal((a, b) => a + b, 2, 7));

// MUTABLE
const array = [1, 2, 3, 4];

const array2 = [1, 2, 3];

function mutable(collection, num) {
	for (let i = 0; i < collection.length; i++) {
		collection[i] *= num;
	}
	return collection;
}

console.log(mutable(array, 2));

console.log(array);

// INMUTABLE

function inMutable(collection, num) {
	const newArray = [];

	for (let item of collection) {
		newArray.push(item * num);
	}

	return newArray;
}

console.log(inMutable(array2, 2));
console.log(array2);

class Perro {
	constructor(name, raza) {
		this.name = name;
		this.raza = raza;
	}
}

function toUpperMutable(perro) {
	perro.raza = perro.raza.toUpperCase();

	return perro;
}

function toUpperImmutable(perro) {
	// const perroClon = { ...perro }; // spread operator

	const perroClon = structuredClone(perro);

	perroClon.raza = perroClon.raza.toUpperCase();

	return perroClon;
}

const perro1 = new Perro('scot', 'coquer');

const perro2 = new Perro('lady', 'chiguagua');

console.log(toUpperMutable(perro1));
console.log(perro1);

console.log(toUpperImmutable(perro2));
console.log(perro2);

function prueba() {
	console.log(array2);
}
