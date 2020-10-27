const dbKey = require('./database/index');
const faker = require('faker');

let imageCount = 1;
for (let i = 0; i < 100000; i++) {
  dbKey.query(`INSERT INTO properties (id) VALUES (${i})`)
  let rand = Math.floor(Math.random() * (30 - 10) + 5);
  for (let j = 0; j < rand; j++) {
    if (imageCount === 100001) {
      imageCount = 1;
    }
    dbKey.query(`INSERT INTO images (property_id, position, url, description) VALUES (${i}, ${j},'https://hrsf127ratemyrestaurant.s3-us-west-1.amazonaws.com${imageCount}.jpg', '${faker.lorem.sentence()}')`)
    imageCount++;
  }
}