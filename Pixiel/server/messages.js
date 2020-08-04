const moment = require('moment');

//Aggiunto formato del messaggio, costituito da nickname, testo e orario in cui è stato inviato il messaggio
function formatMessage(user, text) {
    return {
        user,
        text,
        time: moment().format('h:mm a')
    };
}

module.exports = formatMessage;