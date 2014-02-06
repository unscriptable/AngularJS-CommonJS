module.exports = function ($firebase, fbURL) {
  return $firebase(new Firebase(fbURL));
};
