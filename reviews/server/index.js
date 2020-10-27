const newrelic = require('newrelic');
const express = require('express');
const db = require('../database/postgres/index.js');  //postgres db
// const db = require('../database/index.js');

const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser());



//APPROPRIATE API ROUTE:  http://localhost:8080/restaurants/10/comments
app.get(`/restaurants/:restaurantId/comments`, (req, res) => {
  db.getReviewsByRestaurantId(req.params.restaurantId, (data) => {
    if (data){
      let arrayOfData = data.rows;

      let sortedArrayOfData = arrayOfData.sort(function(a, b) {
        let dateA = new Date(a.review_date);
        let dateB = new Date(b.review_date);
        return dateB - dateA;
      })

      res.send(sortedArrayOfData)
    } else {
      res.send('failure')
    }
  })
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
