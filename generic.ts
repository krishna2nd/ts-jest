interface IPerson {
    name: string;
    getName(): string;
}

class Krishna implements IPerson {
    public name: string;
    constructor(name: string="default") {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

export const getInstance = <T extends IPerson>(type: new() => T): T  =>  {
    return new type();
}
console.log(getInstance(Krishna).getName())

export function getInstance2<T extends IPerson>(type: (new (...args: any[]) => T), ...args: any[]): T {
    return new type(...args);
}
console.log(getInstance2(Krishna, "Test").getName())
