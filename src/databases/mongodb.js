const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/Login";

try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const conecctionOkay = mongoose.connection;
  conecctionOkay.once("open", (_) => {
    console.log("Data bases conected to ", uri);
  });
} catch (e) {
  console.log("There is a error ->", uri);
}
