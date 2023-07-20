const express = require('express');
const cors = require('cors');

const { config } = require("./config");
const loadEndpoints = require('./router');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

loadEndpoints(app);

app.set('port', config.port);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
}
);

