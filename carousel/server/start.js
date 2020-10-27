
require('newrelic');

const app = require('./index.js');

const port = 3009;

app.listen(port, () => console.log(`App listening on http://localhost:${port}`));