const numToEng = require('./numtoeng');
const removeInvalid = require('./removeInvalid');
const oscillatingTreeTraversal = require('./oscillatingTreeTraversal');
const mergeMeetingTimes = require('./mergeMeetingTimes');
const meshMessageRouting = require('./meshMessageRouting');

var network = {
    'Min'     : ['William', 'Jayden', 'Omar'],
    'William' : ['Min', 'Noam'],
    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren'     : ['Jayden', 'Omar'],
    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
    'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
    'Noam'    : ['Nathan', 'Jayden', 'William'],
    'Omar'    : ['Ren', 'Min', 'Scott'],
};

var network2 = {
  'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
  'Amelia'  : ['Jayden', 'Omar', 'Miguel'],
  'Omar'    : ['Ren', 'Adam', 'Scott'],
  'Adam' : ['Jayden']
}


console.log(meshMessageRouting(network, 'Jayden', 'Adam'));
