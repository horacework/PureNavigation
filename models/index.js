"use strict";

exports = module.exports = function(db,models) {

    require("../models/user")(db,models);
    require("../models/links")(db,models);
    require("../models/clicklog")(db,models);
    require("../models/cookies")(db,models);

};