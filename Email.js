"use strict";
exports.__esModule = true;
exports.Email = void 0;
// (() => {
var Email = /** @class */ (function () {
    function Email(theType, theAddress) {
        this.type = theType;
        this.address = theAddress;
    }
    Email.prototype.getType = function () {
        return this.type;
    };
    Email.prototype.setType = function (type) {
        this.type = type;
    };
    Email.prototype.getAddress = function () {
        return this.address;
    };
    Email.prototype.setAddress = function (address) {
        this.address = address;
    };
    return Email;
}());
exports.Email = Email;
// })()
