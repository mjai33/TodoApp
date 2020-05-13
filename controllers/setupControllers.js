const Todos = require('../models/todoModel');

module.exports = (app) => {
    app.get('/api/setupTodos', (req, res) => {
        //seed database
        const starterTodos = [{
                username: 'Mohit',
                todo: 'play cricket',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Mohit',
                todo: 'have sleep',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'Mohit',
                todo: 'Study GCP',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, (err, results) => {
            res.send(results);
        });
    });
}