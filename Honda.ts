import { Car } from './Car';

export class Honda extends Car {
    constructor(model: string) {
        super('Honda', model);
    }

    override honk(): void {
        console.log(`Plastic Car: ${this.make} ${this.model}`);
    }
}
