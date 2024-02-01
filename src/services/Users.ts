export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

const users: User[] = [
  {
    id: 1,
    username: "Bartuś",
    email: "user1@example.com",
    password: "MaSyndromSztokcholmski",
  },
  {
    id: 2,
    username: "user2",
    email: "user2@example.com",
    password: "password2",
  },
  {
    id: 2,
    username: "user2",
    email: "user2@example.com",
    password: "password2",
  },
];

export default users;
