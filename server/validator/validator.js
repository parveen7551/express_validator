exports.validator = {
  isRole: function (role) {
    var userRoles = ["admin", "normal", "customer"];
    if (userRoles.indexOf(role) !== -1) {
      return true;
    }
    return false;
  },
  isArray: function (value) {
    return Array.isArray(value);
  },
  gte: function (param, num) {
    return param >= num;
  },
  gt: function (param, num) {
    return param > num;
  }
};

