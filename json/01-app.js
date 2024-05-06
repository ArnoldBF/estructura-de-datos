// setTimeout(() => console.log('Hola un segundo despues'), 1000);

const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Se ejecuta la promesa');
		reject('Algo salio mal');
		// resolve('pato');
	}, 1000);
});

myPromise
	.then((data) => {
		console.log('El dato retornado por la promesa es: ' + data);
	})
	.catch((error) => console.error(error));

// Api fetch

fetch('https://jsonplaceholder.typicode.com/users')
	.then((data) => data.json())
	.then((dataJson) => console.log(dataJson));

// Async await

(function () {
	console.log('Soy una IIFE: Expresion de funcion ejecutada inmediatamente ');
})();

(async function () {
	const dataResult = await fetch('https://jsonplaceholder.typicode.com/users');
	const jsonResult = await dataResult.json();
	console.log(jsonResult);
})();

// Leyendo nuestro json con el api fetch

fetch('people.json')
	.then((data) => data.json())
	.then((json) => {
		const people = json;

		console.log(people.nombre);
	});
