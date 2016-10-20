class Greeter {
	constructor(name = 'Andrey') {
		this.name = name;
	}
	greet() {
		console.log(`Hello ${this.name}!`);
	}
}

new Greeter().greet();