'use strict';
'use strict';
const telegramBot = require('node-telegram-bot-api');

const config = require ('../config.json');

const indexController = require('./controllers/telegram/indexController')(controller);

module.exports = {

    init: function () {

        const bot = new telegramBot(config.telegramToken, {polling: true});

        indexController.start(controller);

    }

}