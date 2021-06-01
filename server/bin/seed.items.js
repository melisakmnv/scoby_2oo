require('../config/dbConnection');
const Item = require('../models/Item');

const items = [
  {
    name: 'Chamoue',
    description: 'A eatable cat',
    image: 'https://cdn1.iconfinder.com/data/icons/gardening-filled-line/614/1935_-_Growing_Plant-512.png',
    category: 'Kefir',
    quantity: 20,
    address: '7 AV Chamoue 2288',
    location: {
      type: 'Point',
      coordinates: [48.8534, 2.3488]
      },

    // formattedAddress: String,
    creator: "60b65578c99146301ef2e437",
    contact: 'email',
  },
  {
    name: 'Dog',
    description: 'A eatable Dog',
    image: 'https://cdn1.iconfinder.com/data/icons/gardening-filled-line/614/1935_-_Growing_Plant-512.png',
    category: 'Kefir',
    quantity: 20,
    address: '7 AV Chamoue 2288',
    location: {
      type: 'Point',
      coordinates: [48.8534, 2.3488]
      },

    // formattedAddress: String,
    creator: "60b63d8852b7e925f12a0ac6",
    contact: 'email',
  },
  {
    name: 'Pig',
    description: 'A eatable Pig',
    image: 'https://cdn1.iconfinder.com/data/icons/gardening-filled-line/614/1935_-_Growing_Plant-512.png',
    category: 'Kefir',
    quantity: 20,
    address: '7 AV Chamoue 2288',
    location: {
      type: 'Point',
      coordinates: [48.8534, 2.3488]
      },

    // formattedAddress: String,
    creator: "60b63d8852b7e925f12a0ac4",
    contact: 'email',
  },
];

async function insertItems() {
  try {
    await Item.deleteMany();
    const inserted = await Item.insertMany(items);
    console.log(
      `seed items done : ${inserted.length} documents inserted in database !`
    );
  } catch (err) {
    console.error(err);
  }
}

insertItems();
