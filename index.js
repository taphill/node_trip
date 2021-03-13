const express = require('express');

const app = express();
const port = 3000;

const apiV1Routes = require('./routes/api/v1/routes');

app.use('/api/v1', apiV1Routes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
