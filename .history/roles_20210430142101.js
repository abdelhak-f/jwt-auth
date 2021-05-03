const AccessControl = require("accesscontrol");
const access = new AccessControl();

exports.roles = (function() {
  access.grant("basic")
    .readOwn("profile")
    .updateOwn("profile")

    access.grant("supervisor")
    .extend("basic")
    .readAny("profile")

  ac.grant("admin")
    .extend("basic")
    .extend("supervisor")
    .updateAny("profile")
    .deleteAny("profile")

  return ac;
})();
