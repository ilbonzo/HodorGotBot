var telegram = require('telegram-bot-api');
var util = require('util');

var api = new telegram({
        token: '<yout -token>',
        updates: {
            enabled: true
        }
});

api.on('message', function(message)
{
    var response = '';
    var finalPoints = ['!', '.', '?', ' ', ' ', ' ', ' '];
    // we want most space or comma
    var points = ['!', '.', '?', ' ', ' ', ' ', ' ', ';', ':', ',', ',', ' ', ' ', ' ', ' ', ' '];
    var number = Math.floor((Math.random() * 3) + 1);

    for (i = 0; i < number; i++ ) {
        response += 'Hodor' + points[Math.floor(Math.random() * points.length)] + ' ';
    }
    response = response.slice(0, -2);

    var point = finalPoints[Math.floor(Math.random() * finalPoints.length)];
    response = response + point;
    api.sendMessage({
        chat_id: message.chat.id,
        text: response
    }, function(err, data)
    {
        console.log(err);
        console.log(util.inspect(data, false, null));
   });
});
