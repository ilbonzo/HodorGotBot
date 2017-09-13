const telegramBot = require('node-telegram-bot-api');
const util = require('util');

const config = require ("../config.json");

const bot = new telegramBot(config.telegramToken, {polling: true});

bot.on('message', (message) => {
    const bye = 'bye';
    if (message.text.toLowerCase().includes(bye)) {
        bot.sendMessage(message.chat.id, "Have a nice day " + message.from.first_name);
    } else if (typeof message.entities !== 'undefined') {
        if (message.entities[0].type === 'mention') {
            bot.sendMessage(message.chat.id, getGenericResponse());
        }
    }
});

bot.onText(/\/start/, (message) => {
    bot.sendMessage(message.chat.id, 'Hodor', {
    'reply_markup': {
        'keyboard': [['/hodor'],['/hodor [odor]']]
        }
    });
});

bot.onText(/\/hodor/, (message) => {
    bot.sendMessage(message.chat.id, getGenericResponse());
});

bot.onText(/\/hodor (.+)/, (message, match) => {
    const chatId = message.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, 'odor by hodor: ' + resp);
});

function getGenericResponse() {
    let response = '';
    let finalPoints = ['!', '.', '?', ' ', ' ', ' ', ' '];
    // we want most space or comma
    let points = ['!', '.', '?', ' ', ' ', ' ', ' ', ';', ':', ',', ',', ' ', ' ', ' ', ' ', ' '];
    let number = Math.floor((Math.random() * 3) + 1);

    for (i = 0; i < number; i++ ) {
        response += 'Hodor' + points[Math.floor(Math.random() * points.length)] + ' ';
    }
    response = response.slice(0, -2);

    let point = finalPoints[Math.floor(Math.random() * finalPoints.length)];
    response = response + point;
    return response
}