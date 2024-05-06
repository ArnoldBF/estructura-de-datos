class Queue {
	#items = [];

	enqueue(item) {
		this.#items.push(item);
	}

	dequeue() {
		return this.#items.shift();
	}

	isEmpty() {
		return this.#items.length === 0;
	}

	peek() {
		return this.#items[0];
	}

	size() {
		return this.#items.length;
	}

	getItems() {
		return [...this.#items];
	}
}

const queue = new Queue();

queue.enqueue('Pedro');
queue.enqueue('Juan');
queue.enqueue('Hector');

console.log(queue.peek());

queue.dequeue();
console.log(queue.peek());
