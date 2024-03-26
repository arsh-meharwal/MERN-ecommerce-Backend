const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzhhMjhlMzZlNzI1MzBhMWNjMzc3ZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA3NjQ3NjMxfQ.vw_l4hCkE91LLMIexZEIKSBrQ7FfgkkEX4a4hHrbSIU";

  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Yzg5NTBmNzY3NjA4MjVlNmI4MjBmMiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODE3OTQwMH0.H6RjLumyJt1o3b7t7-fA35ZUgndWumCxOXXJ6HpLq5I";

  return token;
};
