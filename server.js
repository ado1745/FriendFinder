const express = require("express");
const path = require("path");

const app = express();

const homeRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(homeRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});