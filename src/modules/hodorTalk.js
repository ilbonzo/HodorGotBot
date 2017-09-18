module.exports = {

    getGenericResponse: function () {
        let response = '';
        let finalPoints = ['!', '.', '?', ' ', ' ', ' ', ' '];
        let points = ['!', '.', '?', ' ', ' ', ' ', ' ', ';', ':', ',', ',', ' ', ' ', ' ', ' ', ' '];
        let number = Math.floor((Math.random() * 3) + 1);

        for (i = 0; i < number; i++ ) {
            response += 'Hodor' + points[Math.floor(Math.random() * points.length)] + ' ';
        }
        response = response.slice(0, -2);

        let point = finalPoints[Math.floor(Math.random() * finalPoints.length)];
        response = response + point;

        return response
    },

    getHaveANiceDay: function (name) {
        return 'Have a nice day ' + name;
    },

    getOdorByHodor: function (text) {
        return 'odor by hodor: ' + text;
    }
}