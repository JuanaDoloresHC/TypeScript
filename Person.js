"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(theName, theSurnames, theAge, theDni, theBirthday, theColourFavourite, theGender, theAddress, theEmail, theTelephone, theNotes) {
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
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getSurnames = function () {
        return this.surnames;
    };
    Person.prototype.setSurnames = function (surnames) {
        this.surnames = surnames;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getDni = function () {
        return this.dni;
    };
    Person.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Person.prototype.getBirthday = function () {
        return this.birthday;
    };
    Person.prototype.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    Person.prototype.getColourFavourite = function () {
        return this.colourFavourite;
    };
    Person.prototype.setColourFavourite = function (colourFavourite) {
        this.colourFavourite = colourFavourite;
    };
    Person.prototype.getGender = function () {
        return this.gender;
    };
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getEmail = function () {
        return this.email;
    };
    Person.prototype.setEmail = function (email) {
        this.email = email;
    };
    Person.prototype.getTelephone = function () {
        return this.telephone;
    };
    Person.prototype.setTelephone = function (telephone) {
        this.telephone = telephone;
    };
    Person.prototype.getNotes = function () {
        return this.notes;
    };
    Person.prototype.setNotes = function (notes) {
        this.notes = notes;
    };
    return Person;
}());
exports.Person = Person;
// })()
