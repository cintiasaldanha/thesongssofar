const app = require("./app");
const db = require("./mongodb");

db.init();

/*
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`app listening on port ${port}`);
*/

//Para publicação no Heroku
const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`App Heroku listening at http://localhost:${PORT}`);

});

