const hodorTalk = require ('../../modules/hodorTalk');

module.exports = {

    start: function (bot) {

        bot.on('message', (message) => {
            const bye = 'bye';
            if (message.text.toLowerCase().includes(bye)) {
                bot.sendMessage(message.chat.id, hodorTalk.getHaveANiceDay(message.from.first_name));
            } else if (typeof message.entities !== 'undefined') {
                if (message.entities[0].type === 'mention') {
                    bot.sendMessage(message.chat.id, hodorTalk.getGenericResponse());
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
            if (message.text === '/hodor') {
                bot.sendMessage(message.chat.id, hodorTalk.getGenericResponse());
            }
        });

        bot.onText(/\/hodor (.+)/, (message, match) => {
            const chatId = message.chat.id;
            const resp = match[1];
            bot.sendMessage(chatId, hodorTalk.getOdorByHodor(resp));
        });

    }

}