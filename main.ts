// (() => {
import { Person } from './Person';
import { Address } from './Address';
import { Telephone } from './Telephone';
import { Email } from './Email';

  //Primer registro
  let telephoneFirstPerson = new Telephone('móvil', 943434312);
  let emailFirstPerson = new Email('trabajo', 'juana@gmail.com');
  let addressFirstPerson = new Address('Calle Arucas', 78, 4, 'A', 36430, 'Arucas', 'Las Palmas');
  let personFirstPerson = new Person('Juana', 'Hernández Cabrera', 28, '43214578Y', '01/12/1993', 'Rojo', 'Femenino', addressFirstPerson, emailFirstPerson, telephoneFirstPerson,  ['Vive en las Palmas']);

  //Segundo registro
  let addressSecondPerson = new Address('Calle Acacias', 53, 2, 'B', 75354, 'Telde', 'Granada');
  let telephoneSecondPerson = new Telephone('fijo', 474763543);
  let emailSecondPerson = new Email('personal', 'marcos@gmail.com');
  let personSecondPerson = new Person('Marcos', 'Fernández Moro', 64, '368446765Y', '14/07/1957', 'Verde', 'Masculino',addressSecondPerson, emailSecondPerson, telephoneSecondPerson, ['Le gusta el cine']);

  //Tercer registro
  let addressThirdPerson = new Address('Calle Tiburón', 43, 1, 'Y', 65840, 'Granada', 'Andalucía');
  let telephoneThirdPerson = new Telephone('móvil', 647348732);
  let emailThirdPerson = new Email('personal', 'isaac@gmail.com');
  let personThirdPerson = new Person('Isac', 'Cabrera Cabrera', 45, '3759372932K', '08/11/1987', 'Azul', 'Masculino', addressThirdPerson, emailThirdPerson, telephoneThirdPerson, ['Ve la TV todos los días']);

  const people: Person[] = [personFirstPerson, personSecondPerson, personThirdPerson];
  console.log(people);

  //Encontrar a la persona por DNI
  const searchPerson = (dni: string): any => {
    let personFounded;
    people.forEach((person) => {
      if (person.getDni() === dni) {
        personFounded = person;
      }
    });
    return personFounded;
  }

  console.log('Buscar persona 1: ', searchPerson('23134324T'));
  console.log('Buscar persona 2: ', searchPerson('43214578Y'));

  //Modificar a la persona por DNI
  const changePersonData = (dni: string, newEmail: Email, newAddress: Address, newTelephone: Telephone): void => {
    const person = searchPerson(dni);
    person.setEmail(newEmail);
    person.setAddress(newAddress);
    person.setTelephone(newTelephone);
    return person;
  }

  const newEmail = new Email('Personal Cambiado', 'correoCambiadoJuana@gmail.com');
  const newAddress = new Address ('Calle Cambiada por DNI', 0, 6, 'G', 36853, 'Cambiada', 'Provincia cambiada');
  const newTelephone = new Telephone('móvilCambiado', 111111111);
  console.log('Persona cambiada: ', changePersonData('43214578Y', newEmail, newAddress, newTelephone));
// })()