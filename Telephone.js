"use strict";
exports.__esModule = true;
exports.Telephone = void 0;
// (() => {
var Telephone = /** @class */ (function () {
    function Telephone(theType, theNumberPhone) {
        this.type = theType;
        this.numberPhone = theNumberPhone;
    }
    Telephone.prototype.getType = function () {
        return this.type;
    };
    Telephone.prototype.setType = function (type) {
        this.type = type;
    };
    Telephone.prototype.getNumberPhone = function () {
        return this.numberPhone;
    };
    Telephone.prototype.setNumberPhone = function (numberPhone) {
        this.numberPhone = numberPhone;
    };
    return Telephone;
}());
exports.Telephone = Telephone;
// })()
