// (() => {
  export class Address {
    private street: string;
    private numberAddress: number;
    private floor: number;
    private letter: string;
    private postcode: number;
    private town: string;
    private province: string;

    constructor(theStreet: string, theNumberAddress: number, theFloor: number, theLetter: string, thePostcode: number, theTown: string, theProvince: string){
      this.street = theStreet;
      this.numberAddress = theNumberAddress;
      this.floor = theFloor;
      this.letter = theLetter;
      this.postcode = thePostcode;
      this.town = theTown;
      this.province = theProvince;
    }

    public getStreet(): string {
      return this.street;
    }
    public setStreet(street: string): void {
      this.street = street;
    }

    public getNumberAddress(): number {
      return this.numberAddress;
    }
    public setNumberAddress(numberAddress: number): void {
      this.numberAddress = numberAddress;
    }

    public getFloor(): number {
      return this.floor;
    }
    public setFloor(floor: number): void {
      this.floor = floor;
    }

    public getLetter(): string {
      return this.letter;
    }
    public setLetter(letter: string): void {
      this.letter= letter;
    }

    public getPostcode(): number {
      return this.postcode;
    }
    public setPostcode(postcode: number): void {
      this.postcode = postcode;
    }

    public getTown(): string {
      return this.town;
    }
    public setTown(town: string): void {
      this.town= town;
    }

    public getProvince(): string {
      return this.province;
    }
    public setProvince(province: string): void {
      this.province= province;
    }
  }
// })()