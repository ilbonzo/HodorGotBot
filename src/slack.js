'use strict';
const Botkit = require('botkit');

const config = require ('../config.json');
const hodorTalk = require ('./modules/hodorTalk');


module.exports = {
    init: function () {

        var controller = Botkit.slackbot({
            debug: false
        });

        controller.spawn({
           token: config.slackToken
        }).startRTM();

        controller.hears('hodor',    ['direct_message','direct_mention','mention'],function(bot,message) {
            bot.reply(message,hodorTalk.getGenericResponse());
        });
    }
}