"use strict";
exports.__esModule = true;
exports.Address = void 0;
// (() => {
var Address = /** @class */ (function () {
    function Address(theStreet, theNumberAddress, theFloor, theLetter, thePostcode, theTown, theProvince) {
        this.street = theStreet;
        this.numberAddress = theNumberAddress;
        this.floor = theFloor;
        this.letter = theLetter;
        this.postcode = thePostcode;
        this.town = theTown;
        this.province = theProvince;
    }
    Address.prototype.getStreet = function () {
        return this.street;
    };
    Address.prototype.setStreet = function (street) {
        this.street = street;
    };
    Address.prototype.getNumberAddress = function () {
        return this.numberAddress;
    };
    Address.prototype.setNumberAddress = function (numberAddress) {
        this.numberAddress = numberAddress;
    };
    Address.prototype.getFloor = function () {
        return this.floor;
    };
    Address.prototype.setFloor = function (floor) {
        this.floor = floor;
    };
    Address.prototype.getLetter = function () {
        return this.letter;
    };
    Address.prototype.setLetter = function (letter) {
        this.letter = letter;
    };
    Address.prototype.getPostcode = function () {
        return this.postcode;
    };
    Address.prototype.setPostcode = function (postcode) {
        this.postcode = postcode;
    };
    Address.prototype.getTown = function () {
        return this.town;
    };
    Address.prototype.setTown = function (town) {
        this.town = town;
    };
    Address.prototype.getProvince = function () {
        return this.province;
    };
    Address.prototype.setProvince = function (province) {
        this.province = province;
    };
    return Address;
}());
exports.Address = Address;
// })()
