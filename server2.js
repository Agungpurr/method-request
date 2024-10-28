const Hapi = require("@hapi/hapi");
const routes = require("./routes2");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  //menambahkan routing
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();
