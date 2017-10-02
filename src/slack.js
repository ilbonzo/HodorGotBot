'use strict';
const Botkit = require('botkit');

const indexController = require('./controllers/slack/indexController');

module.exports = {

    init: function (config) {

        const controller = Botkit.slackbot({
            debug: false
        });

        const bot = controller.spawn({
           token: config.slackToken
        })

        indexController.start(controller);

        bot.startRTM();
    }

}