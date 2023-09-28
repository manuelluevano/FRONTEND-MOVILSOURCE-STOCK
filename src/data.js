// * fake data's
import { faker } from "@faker-js/faker";
import { listReports } from "../src/API/events";

const response = await listReports();
console.log("Datos", response.reporte);

export function CreateRandomUser() {
  // return {
  //   profile: faker.image.avatar(),
  //   firstName: response.reporte[0].refaccion.calidad,
  //   lastName: faker.person.lastName(),
  //   age: faker.datatype.number(40),
  //   visits: faker.datatype.number(1000),
  //   progress: faker.datatype.number(100),
  // };

  return (
    response.reporte
  )

}

export const USERS = faker.helpers.multiple(CreateRandomUser, {
  count: 10,
});
