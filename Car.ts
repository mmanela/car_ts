export class Car {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    honk(): void {
        console.log(`Car: ${this.make} ${this.model}`);
    }
}
