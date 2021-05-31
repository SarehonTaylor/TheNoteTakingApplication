const path = require('path');
const db = require('../../../db/db.json')

module.exports =(app) => {
    app.get('/api/notes"), function (req, res) {
        res.json(db)
    }
});