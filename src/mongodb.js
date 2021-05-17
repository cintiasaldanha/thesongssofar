const mongoose = require("mongoose");

const user = "admindean";
const pass = "Impala67";
const database = "soundtrack";
const serverName = "cluster0.ntmx6.mongodb.net";

module.exports = {
  init: () => {
    mongoose
      .connect(
        `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        }
      )
      .then((res) => console.log(`Connection Succesful ${res}`))
      .catch((err) => console.log(`Error in DB connection ${err}`));
  },
};