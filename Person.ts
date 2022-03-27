// (() => {
import { Address } from "./Address";
import { Email } from "./Email";
import { Telephone } from "./Telephone";

  export class Person {
    private name: string;
    private surnames: string;
    private age: number;
    private dni: string;
    private birthday: string;
    private colourFavourite: string;
    private gender: string; 
    private address: Address;
    private email: Email;
    private telephone: Telephone;
    private notes: string[];
 
    constructor(
      theName: string, 
      theSurnames: string, 
      theAge: number, 
      theDni: string, 
      theBirthday: string, 
      theColourFavourite: string, 
      theGender: string, 
      theAddress: Address, 
      theEmail: Email, 
      theTelephone: Telephone,
      theNotes: string[]
      ) {
      this.name = theName;
      this.surnames = theSurnames;
      this.age = theAge;
      this.dni = theDni;
      this.birthday = theBirthday;
      this.colourFavourite = theColourFavourite;
      this.gender = theGender;
      this.address = theAddress;
      this.email = theEmail;
      this.telephone = theTelephone;
      this.notes = theNotes;
    }

    //Getters and Setters
    public getName(): string {
      return this.name;
    }

    public setName(name: string): void {
      this.name = name;
    }

    public getSurnames(): string {
      return this.surnames;
    }

    public setSurnames(surnames: string): void {
      this.surnames = surnames;
    }

    public getAge(): number {
      return this.age;
    }

    public setAge(age: number): void {
      this.age = age;
    }

    public getDni(): string {
      return this.dni;
    }

    public setDni(dni: string): void {
      this.dni = dni;
    }

    public getBirthday(): string {
      return this.birthday;
    }

    public setBirthday(birthday: string): void {
      this.birthday = birthday;
    }

    public getColourFavourite(): string {
      return this.colourFavourite;
    }

    public setColourFavourite(colourFavourite: string): void {
      this.colourFavourite = colourFavourite;
    }

    public getGender(): string {
      return this.gender;
    }

    public setGender(gender: string): void {
      this.gender = gender;
    }

    public getAddress(): Address | undefined {
      return this.address;
    }

    public setAddress(address: Address): void {
      this.address = address;
    }

    public getEmail(): Email {
      return this.email;
    }

    public setEmail(email: Email): void {
      this.email = email;
    }

    public getTelephone(): Telephone {
      return this.telephone;
    }

    public setTelephone(telephone: Telephone): void {
      this.telephone = telephone;
    }

    public getNotes(): string[] {
      return this.notes;
    }

    public setNotes(notes: string[]): void {
      this.notes = notes;
    } 
  }
// })()