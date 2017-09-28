'use strict';
'use strict';
const telegramBot = require('node-telegram-bot-api');

const indexController = require('./controllers/telegram/indexController');

module.exports = {

    init: function (config) {

        const bot = new telegramBot(config.telegramToken, {polling: true});

        indexController.start(bot);

    }

}