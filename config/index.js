const configValues = require('./config');

module.exports = {
    getDbConnectionString: function () {
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@todoapp-6onun.mongodb.net/test?retryWrites=true&w=majority`;
    }
}