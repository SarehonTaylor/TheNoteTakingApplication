const express = require('express');
const path = require('path');

const app = express ();
const PORT = process.env.PORT || 3000;

app.use(expressurl({extended: true}));
app,use(express.json());
app.use(expres,static(path.join(__dirname, './public')))

require('./public/assets')(app);

app.listen(PORT, function() {
    console.log(`The app is listing on port 3000`);
});