// (() => {
  export class Email {
    private type: string;
    private address: string;

    constructor(theType: string, theAddress: string) {
      this.type = theType;
      this.address = theAddress;
    }

    public getType(): string {
      return this.type;
    }
    public setType(type: string): void {
      this.type= type;
    }

    public getAddress(): string {
      return this.address;
    }
    public setAddress(address: string): void {
      this.address= address;
    }
  }
// })()