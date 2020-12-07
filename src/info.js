import faker from "faker";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";

export default [
  {
    id: 1,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    profile: img1
  },
  {
    id: 2,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    profile: img2
  },
  {
    id: 3,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    profile: img3
  },
  {
    id: 4,
    name: faker.name.firstName(),
    email: faker.internet.email(),
    profile: img4
  }
  // {
  //   id: 5,
  //   name: faker.name.firstName(),
  //   email: faker.internet.email(),
  //   profile: img4
  // },
  // {
  //   id: 6,
  //   name: faker.name.firstName(),
  //   email: faker.internet.email(),
  //   profile: img4
  // }
];
