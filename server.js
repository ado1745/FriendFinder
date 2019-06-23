const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


require('./routing/apiRoutes');
require('./routing/htmlRoutes');


// Cheching connection to the PORT 
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
