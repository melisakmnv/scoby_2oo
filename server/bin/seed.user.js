const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require('../config/dbConnection');
const User = require('../models/User')


const users = [{
  firstName: "Baz",
  lastName: "Foo",
  profileImg:"https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
  email: "foobaz@gmail.com",
  password: "1234",
  phoneNumber: "88888888",

},
{
    firstName: "Baoooz",
    lastName: "Fsssoo",
    profileImg:"https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
    email: "foobaz@gmail.com",
    password: "1234",
    phoneNumber: "88888888",
  },
  {
    firstName: "Basssqqsz",
    lastName: "DDoo",
    profileImg:"https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
    email: "foobaz@gmail.com",
    password: "1234",
    phoneNumber: "88888888",
  }];

async function insertUsers() {
    try {
      await User.deleteMany();
      const inserted = await User.insertMany(users);
      console.log(
        `seed users done : ${inserted.length} documents inserted in database !`
      );
    } catch (err) {
      console.error(err);
    }
  }
  
  insertUsers();