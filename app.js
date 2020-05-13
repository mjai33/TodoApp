const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupControllers');
const apiController = require('./controllers/apiController');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/', express.static(__dirname + '/public'));

mongoose.connect(config.getDbConnectionString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
setupController(app);
apiController(app);
app.listen(port);