const Botmock = require('botkit-mock');
const slackController = require('../../../src/controllers/slack/indexController.js');

test('get generic response in slack', (done) => {

    let controller = Botmock({
        debug: false,
        log: false
    });
    let bot = controller.spawn({type: 'slack'});
    slackController.start(controller);

    bot.usersInput(
        [
            {
                user: 'ilbonzo',
                channel: 'hodor-channel',
                messages: [
                    {
                        text: '/hodor hodor', isAssertion: true
                    }
                ]
            }
        ]
    ).then((message) => {
        expect(message.text).toContain('Hodor');
        done();
    })
});
