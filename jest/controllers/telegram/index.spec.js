
const telegramController = require('../../../src/controllers/telegram/indexController.js');

test('get response of message bye in telegram', () => {
    const telegramBot = require('node-telegram-bot-api');

    const botMock = new telegramBot('xxxxxx', { polling: false });
    botMock.sendMessage = function (chatId, message) {
        expect(message).toEqual('Have a nice day trent');
    }

    telegramController.start(botMock);

    botMock.emit('message', {
                'text': 'bye',
                'chat': {
                    'id': 10
                },
                'from': {
                    'first_name': 'trent'
                }
            });
});

test('get response of message bye in telegram', () => {
    const telegramBot = require('node-telegram-bot-api');

    const botMock = new telegramBot('xxxxxx', { polling: false });

    telegramController.start(botMock);

    botMock.emit('message', {
                'text': 'hi',
                'chat': {
                    'id': 10
                },
                'from': {
                    'first_name': 'trent'
                }
            });
});

test('get not send response of generic message in telegram', () => {
    const telegramBot = require('node-telegram-bot-api');

    const botMock = new telegramBot('xxxxxx', { polling: false });

    telegramController.start(botMock);

    botMock.emit('message', {
                'text': 'Hi hodor',
                'chat': {
                    'id': 10
                }
            });
});

test('get response of generic message in telegram', () => {
    const telegramBot = require('node-telegram-bot-api');

    const botMock = new telegramBot('xxxxxx', { polling: false });
    botMock.sendMessage = function (chatId, message) {
        expect(message).toContain('Hodor');
    }

    telegramController.start(botMock);

    botMock.emit('message', {
                'text': 'Hi hodor',
                'chat': {
                    'id': 10
                },
                'entities': [{'type': 'mention'}]
            });
});

test('get response of command /start in telegram', () => {
    const telegramBot = require('node-telegram-bot-api');

    const botMock = new telegramBot('xxxxxx', { polling: false });
    botMock.sendMessage = function (chatId, message, arg) {
        expect(message).toEqual('Hodor');
        expect(arg).toEqual({
            'reply_markup': {
                'keyboard': [['/hodor'],['/hodor [odor]']]
                }
            });
    }

    telegramController.start(botMock);
    const message = {
        'text': '/start',
        'chat': {
            'id': 10
        },
        'entities': [
            { 'offset': 0, 'length': 6, 'type': 'bot_command' }
        ]
    };

    botMock.emit('message', message);
    botMock.processUpdate({ 'message': message });
});

test('get response of command /hodor in telegram', () => {
    const telegramBot = require('node-telegram-bot-api');

    const botMock = new telegramBot('xxxxxx', { polling: false });
    botMock.sendMessage = function (chatId, message) {
        expect(message).toContain('Hodor');
    }

    telegramController.start(botMock);

    const message = {
        'text': '/hodor',
        'chat': {
            'id': 10
        },
        'entities': [
            { 'offset': 0, 'length': 6, 'type': 'bot_command' }
        ]
    };
    botMock.emit('message', message);
    botMock.processUpdate({ 'message': message });
});

test('get response of command /hodor [odor] in telegram', () => {
    const telegramBot = require('node-telegram-bot-api');

    const botMock = new telegramBot('xxxxxx', { polling: false });
    botMock.sendMessage = function (chatId, message) {
        expect(message).toEqual('odor by hodor: trent reznor');
    }

    telegramController.start(botMock);

    const message = {
        'text': '/hodor trent reznor',
        'chat': {
            'id': 10
        },
        'entities': [
            { 'offset': 0, 'length': 6, 'type': 'bot_command' }
        ]
    };

    botMock.emit('message', message);
    botMock.processUpdate({ 'message': message });
});