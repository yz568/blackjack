var path = require('path');
var fs = require('fs');

var render = function() {
    return path.join(__dirname,'../public/blackjack.html');
};

exports.render = render; 