// Implementacion pila

class Stack {
	#items = [];

	push(item) {
		this.#items.push(item);
	}

	pop() {
		return this.#items.pop();
	}

	peek() {
		return this.#items[this.#items.length - 1];
	}

	size() {
		return this.#items.length;
	}

	printStack() {
		return [...this.#items];
	}

	isEmty() {
		return this.#items.length === 0;
	}
}

const stack = new Stack();

stack.push('Pedro');

stack.push('Jose');

stack.push('Juan');

console.log(stack.printStack());

console.log(stack.peek());

console.log(stack.isEmty());
// console.log(stack.pop());

// while (!stack.isEmty()) {
// 	console.log(stack.pop());
// }
