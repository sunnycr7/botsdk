var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/app');
app.use(express.static(staticPath));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});