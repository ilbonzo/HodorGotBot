const hodorTalk = require ('../../modules/hodorTalk');

module.exports = {

    start: function (controller) {
        controller.hears('hodor', ['direct_message', 'direct_mention', 'mention'], function(bot,message) {
            bot.reply(message, hodorTalk.getGenericResponse());
        });
    }

}