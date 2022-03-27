// (() => {
  export class Telephone {
    private type: string;
    private numberPhone: number;

    constructor(theType: string, theNumberPhone: number) {
      this.type = theType;
      this.numberPhone = theNumberPhone;
    }

    public getType(): string {
      return this.type;
    }
    public setType(type: string): void {
      this.type = type;
    }

    public getNumberPhone(): number {
      return this.numberPhone;
    }
    public setNumberPhone(numberPhone: number): void {
      this.numberPhone = numberPhone;
    }
  }
// })()