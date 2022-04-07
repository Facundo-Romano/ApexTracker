const loadMockData = require("./mockData/loadMockData.js");
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { LOAD_MOCK_DATA } = process.env;
// Syncing all the models at once.

const PORT = process.env.PORT || 3001;

conn
  .sync({ force: true })
  .then(() => {
    if (LOAD_MOCK_DATA) loadMockData();
  })
  .then(() => {
    conn.query("CREATE EXTENSION IF NOT EXISTS  pg_trgm;");
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    });
  })
  .catch((err) => {
    console.error(err);
  });
