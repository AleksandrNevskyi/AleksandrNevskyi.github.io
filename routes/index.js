exports.web = (app) => {
    const mysql = require('mysql');
    app.get('/', (req, res) => {
        let conn = mysql.createConnection({
            host:   '127.0.0.1',
            user: 'root',
            password: '1amon.gus',
            database: 'whatchat'
        });
        conn.query('select * from msgs', (err, result) => {
            res.render('index', {'data': result});
        });
    });
}
