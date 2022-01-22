const app = require("./app");

//! Config
app.set("port", process.env.PORT || 1000);

const init = async () => {
  await app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
  });
};
init();
