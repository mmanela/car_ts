import { Car } from './Car';

export class Subaru extends Car {
    constructor(model: string) {
        super('Subaru', model);
    }


    override honk(): void {
        console.log(`Outdoor Car: ${this.make} ${this.model}`);
    }
}

const s = new Subaru('Forester');
s.honk();