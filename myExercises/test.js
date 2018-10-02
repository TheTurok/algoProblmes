const numToEng = require('./numtoeng');
const removeInvalid = require('./removeInvalid');
const oscillatingTreeTraversal = require('./oscillatingTreeTraversal');
const mergeMeetingTimes = require('./mergeMeetingTimes');

var mt =  [
  { startTime: 1,  endTime: 2 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]
;

console.log(mergeMeetingTimes(mt));
