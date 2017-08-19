
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unneeded-ternary */
// Do not change any of the function names

const makeCat = (name, age) => {
  return {
    name,
    age,
    meow: () => 'Meow!'
  };
};

const addProperty = (object, property) => {
  object[property] = null;
  return object;
};

const invokeMethod = (object, method) => object[method]();

const multiplyMysteryNumberByFive = mysteryNumberObject => mysteryNumberObject.mysteryNumber * 5;

const deleteProperty = (object, property) => {
  delete object[property];
  return object;
};

const newUser = (name, email, password) => {
  return {
    name,
    email,
    password
  };
};

const hasEmail = user => user.email ? true : false;

const hasProperty = (object, property) => object.hasOwnProperty(property);

const verifyPassword = (user, password) => user.password === password;

const updatePassword = (user, newPassword) => {
  user.password = newPassword;
  return user;
};

const addFriend = (user, newFriend) => {
  user.friends.push(newFriend);
  return user;
};

const setUsersToPremium = (users) => {
  users.forEach((user) => {
    user.isPremium = true;
  });
  return users;
};

const sumUserPostLikes = user => user.posts.map(post => post.likes).reduce((acc, cv) => acc + cv);

const addCalculateDiscountPriceMethod = (storeItem) => {
  storeItem.calculateDiscountPrice = function calcDisc() {
    return this.price - (this.price * this.discountPercentage);
  };
  return storeItem;
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod
};
