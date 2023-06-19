const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
const port = 3000;
const route = require('./routes');
const db = require('./config/db')
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(methodOverride('_method'));

//connect to DB
db.connect();

//Xu ly file tinh~
app.use(express.static(path.join(__dirname, 'public')));

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});


