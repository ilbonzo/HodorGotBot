'use strict';
const Botkit = require('botkit');

const config = require ('../config.json');
const indexController = require('./controllers/slack/indexController')(controller);

module.exports = {

    init: function () {

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