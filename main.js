"use strict";
exports.__esModule = true;
// (() => {
var Person_1 = require("./Person");
var Address_1 = require("./Address");
var Telephone_1 = require("./Telephone");
var Email_1 = require("./Email");
//Primer registro
var telephoneFirstPerson = new Telephone_1.Telephone('móvil', 943434312);
var emailFirstPerson = new Email_1.Email('trabajo', 'juana@gmail.com');
var addressFirstPerson = new Address_1.Address('Calle Arucas', 78, 4, 'A', 36430, 'Arucas', 'Las Palmas');
var personFirstPerson = new Person_1.Person('Juana', 'Hernández Cabrera', 28, '43214578Y', '01/12/1993', 'Rojo', 'Femenino', addressFirstPerson, emailFirstPerson, telephoneFirstPerson, ['Vive en las Palmas']);
//Segundo registro
var addressSecondPerson = new Address_1.Address('Calle Acacias', 53, 2, 'B', 75354, 'Telde', 'Granada');
var telephoneSecondPerson = new Telephone_1.Telephone('fijo', 474763543);
var emailSecondPerson = new Email_1.Email('personal', 'marcos@gmail.com');
var personSecondPerson = new Person_1.Person('Marcos', 'Fernández Moro', 64, '368446765Y', '14/07/1957', 'Verde', 'Masculino', addressSecondPerson, emailSecondPerson, telephoneSecondPerson, ['Le gusta el cine']);
//Tercer registro
var addressThirdPerson = new Address_1.Address('Calle Tiburón', 43, 1, 'Y', 65840, 'Granada', 'Andalucía');
var telephoneThirdPerson = new Telephone_1.Telephone('móvil', 647348732);
var emailThirdPerson = new Email_1.Email('personal', 'isaac@gmail.com');
var personThirdPerson = new Person_1.Person('Isac', 'Cabrera Cabrera', 45, '3759372932K', '08/11/1987', 'Azul', 'Masculino', addressThirdPerson, emailThirdPerson, telephoneThirdPerson, ['Ve la TV todos los días']);
var people = [personFirstPerson, personSecondPerson, personThirdPerson];
console.log(people);
//Encontrar a la persona por DNI
var searchPerson = function (dni) {
    var personFounded;
    people.forEach(function (person) {
        if (person.getDni() === dni) {
            personFounded = person;
        }
    });
    return personFounded;
};
console.log('Buscar persona 1: ', searchPerson('23134324T'));
console.log('Buscar persona 2: ', searchPerson('43214578Y'));
//Modificar a la persona por DNI
var changePersonData = function (dni, newEmail, newAddress, newTelephone) {
    var person = searchPerson(dni);
    person.setEmail(newEmail);
    person.setAddress(newAddress);
    person.setTelephone(newTelephone);
    return person;
};
var newEmail = new Email_1.Email('Personal Cambiado', 'correoCambiadoJuana@gmail.com');
var newAddress = new Address_1.Address('Calle Cambiada por DNI', 0, 6, 'G', 36853, 'Cambiada', 'Provincia cambiada');
var newTelephone = new Telephone_1.Telephone('móvilCambiado', 111111111);
console.log('Persona cambiada: ', changePersonData('43214578Y', newEmail, newAddress, newTelephone));
// })()
