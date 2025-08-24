// 1. import json-server
const jsonServer = require("json-server");

// 2. import cors
const cors = require("cors");

// 3. create a server
const server = jsonServer.create();

// 4. Setup a middleware
const middleware = jsonServer.defaults();

// 5. setup routes to db.json
const router = jsonServer.router("db.json");

// 6. use cors + middleware
server.use(cors());
server.use(middleware);

// 7. use router
server.use(router);

// 8. set port (3001 so React (3000) doesn’t clash)
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`🚀 JSON Server is running at http://localhost:${PORT}`);
});
