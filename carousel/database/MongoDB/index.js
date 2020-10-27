const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurants', {
  useNewUrlParser: true,
});


const restaurantInfoSchema = mongoose.Schema({
  restaurantId: Schema.Types.ObjectId,
  name: String,
  website: String,
  images: [{ type: Schema.Types.ObjectId, ref: 'Images' }],
});

const userInfo = mongoose.schema({
  userId : Schema.Types.ObjectId,
  userName :String, 
  userReviews :String,
  userType :String,
  userIconImage:String,
  restaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurants' }],
  images: [{ type: Schema.Types.ObjectId, ref: 'Images' }],
});

const imageSchema = Schema({
  imageId : Schema.Types.ObjectId,
  imageTitle: String,
  itemImageUrl :String,
  imageCategory :String,
  imageDescription :String,
  imageUploadDate :Date,
  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurants' }
});

var Restaurants = mongoose.model('Restaurants', restaurantInfoSchema);
var Images = mongoose.model('Images', imageInfoSchema);
var Users = mongoose.model('Users', userInfoSchema);


module.exports.Restaurants = Restaurants;
module.exports.Users = Users;
module.exports.Images = Images;


