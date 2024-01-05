import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Bogdan',
      email: 'bogdan@gmail.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: false,
    },
  ],
};
export default data;
