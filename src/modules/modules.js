const faculties = require( "./faculties/router.js");
const regions = require( "./regions/router.js");
const results = require("./results/router.js") ;
const subjects = require("./subjects/router.js") ;
const tests = require("./tests/router.js") ;
const universities = require("./universities/router.js") ;
const users = require("./users/router.js") ;

module.exports = [faculties, regions, results, subjects, tests, universities, users];
